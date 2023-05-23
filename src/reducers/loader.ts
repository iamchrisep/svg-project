import type {
    IStore,
    ILoader
} from '../types/reducer'
import type { IAction } from '../types/action'
import * as redux from '../constants/redux'

const initialState: ILoader = {
    is_loader: false
}

export default function loaderState (state: ILoader = initialState, action: IAction) {
    const { type } = action
    switch (type) {
        case redux.START_LOADER: {
            return { ...state, is_loader: true }
        }
        case redux.FINISH_LOADER: {
            return { ...state, is_loader: false }
        }
        case redux.RESET: {
            return { ...initialState }
        }
        default: {
            return state
        }
    }
}

export const getLoaderState = (store: IStore) => store.loaderState
