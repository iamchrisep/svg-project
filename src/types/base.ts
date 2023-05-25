import { IProjectYup } from 'utils/yup'

export interface ILoader {
    isLoading: boolean
}

export interface IError {
    isError?: boolean
    error?: any
}

export interface IDetails {
    id: string
    name: string
}

export interface IInit {
    id: string
    name: string
    modified: number
}

export interface ICustomId {
    id: string
}

export interface IItem {
    id: string
    type: 'rectange' | 'ellipse' | string
    color: string
    rotation: number
    x: number
    y: number
    width: number
    height: number
}

export interface IProject extends IProjectYup {}

export interface ICanvas {
    width: number
    height: number
    items: IItem[]
}
