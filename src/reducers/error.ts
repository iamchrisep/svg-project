import * as redux from 'constants/redux'
import type * as reducer from 'types/reducer'
import type * as action from 'types/action'

const initialState: reducer.IError = {
    isError: false,
    error: undefined
}

export default function initState (state: reducer.IError = initialState, action: action.IError) {
    const { type, payload } = action
    switch (type) {
        case redux.FETCH_ERROR: {
            return {
                ...state,
                error: payload,
                isError: true
            }
        }
        case redux.CLEAR_ERROR: {
            return { ...initialState }
        }
        case redux.RESET: {
            return { ...initialState }
        }
        default: {
            return state
        }
    }
}

export const getErrorState = (store: reducer.IStore) => store.errorState
