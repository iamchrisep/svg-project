import * as redux from '../constants/redux'
import type { IAction } from '../types/action'

export const startLoaderAction = (): IAction => ({
    type: redux.START_LOADER
})

export const finishLoaderAction = (): IAction => ({
    type: redux.FINISH_LOADER
})
