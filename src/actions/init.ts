import * as saga from 'constants/saga'
import * as redux from 'constants/redux'
import type { IInit, ICustomId } from 'types/base'
import type { IInitRequest, IInitSuccess, ICustomIdSuccess } from 'types/action'

export const fetchInitRequest = (): IInitRequest => ({
    type: saga.FETCH_INIT_REQUEST
})

export const fetchInitSuccess = (payload: IInit): IInitSuccess => ({
    type: redux.FETCH_INIT_SUCCESS,
    payload
})

export const setCustomId = (payload: ICustomId): ICustomIdSuccess => ({
    type: redux.SET_CUSTOM_ID,
    payload
})
