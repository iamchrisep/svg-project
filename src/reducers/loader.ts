import type * as reducer from 'types/reducer'
import type * as action from 'types/action'
import * as redux from 'constants/redux'

const initialState: reducer.ILoader = {
    isLoading: false
}

export default function loaderState (state: reducer.ILoader = initialState, action: action.ILoader) {
    const { type } = action
    switch (type) {
        case redux.START_LOADER: {
            return { ...state, isLoading: true }
        }
        case redux.FINISH_LOADER: {
            return { ...state, isLoading: false }
        }
        case redux.RESET: {
            return { ...initialState }
        }
        default: {
            return state
        }
    }
}

export const getLoaderState = (store: reducer.IStore) => store.loaderState
