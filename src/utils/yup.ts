// @ts-nocheck

import * as yup from 'yup'
import type { InferType } from 'yup'

const elemTypes = ['rectangle', 'ellipse'] as const

type ElemTypes = typeof elemTypes[number]

declare module 'yup' {
    interface ArraySchema<T> {
        unique(
            message: string,
            mapper?: (value: T, index?: number, list?: T[]) => T[]
        ): ArraySchema<T>
    }
}

yup.addMethod(yup.array, 'unique', function (
    message,
    mapper = (val: unknown) => val
) {
    return this.test(
        'unique',
        message,
        (list = []) => list.length === new Set(list.map(mapper)).size
    )
})

export const projectSchema = yup.object({
    id: yup.string().required(),
    project: yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        width: yup.number().required().positive().moreThan(0),
        height: yup.number().required().positive().moreThan(0),
        items: yup.array().of(
            yup.object().shape({
                id: yup.string().required(),
                type: yup.mixed<ElemTypes>().oneOf(elemTypes).required(),
                color: yup.string().required(),
                rotation: yup.number().required().positive().min(0).max(360),
                x: yup.number().required(),
                y: yup.number().required(),
                width: yup.number().required().positive().moreThan(0),
                height: yup.number().required().positive().moreThan(0)
            }).required()
        ).required().min(1).unique('ID list must be unique', (val: any) => val.id)
    }).required()
})

export const projectValidate = (data: any) => projectSchema.isValidSync(data)

export interface IProjectYup extends InferType<typeof projectSchema> {}
