import * as saga from 'constants/saga'
import * as redux from 'constants/redux'
import type { IProject } from 'types/base'
import type { IProjectRequest, IProjectSuccess } from 'types/action'

export const fetchProjectRequest = (id: string): IProjectRequest => ({
    type: saga.FETCH_PROJECT_REQUEST,
    payload: id
})

export const fetchProjectSuccess = (payload: IProject): IProjectSuccess => ({
    type: redux.FETCH_PROJECT_SUCCESS,
    payload
})
