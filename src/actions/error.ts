import * as redux from 'constants/redux'
import type { IAction, IError } from 'types/action'

export const fetchError = (payload: any): IError => ({
    type: redux.FETCH_ERROR,
    payload
})

export const clearError = (): IAction => ({
    type: redux.CLEAR_ERROR
})
