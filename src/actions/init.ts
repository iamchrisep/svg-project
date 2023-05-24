import * as saga from 'constants/saga'
import * as redux from 'constants/redux'
import type { IInit } from 'types/base'
import type { IInitRequest, IInitSuccess } from 'types/action'

export const fetchInitRequest = (): IInitRequest => ({
    type: saga.FETCH_INIT_REQUEST
})

export const fetchInitSuccess = (payload: IInit): IInitSuccess => ({
    type: redux.FETCH_INIT_SUCCESS,
    payload
})
