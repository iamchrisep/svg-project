import * as redux from 'constants/redux'
import type { ILoader } from 'types/action'

export const startLoader = (): ILoader => ({
    type: redux.START_LOADER
})

export const finishLoader = (): ILoader => ({
    type: redux.FINISH_LOADER
})
