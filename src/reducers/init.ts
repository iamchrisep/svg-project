import * as redux from 'constants/redux'
import type * as reducer from 'types/reducer'
import type * as action from 'types/action'

const initialState: reducer.IInit = {
    id: '',
    name: '',
    modified: 0
}

export default function initState (state: reducer.IInit = initialState, action: action.IInitSuccess | action.ICustomIdSuccess) {
    const { type, payload } = action
    switch (type) {
        case redux.FETCH_INIT_SUCCESS: {
            return {
                ...state,
                ...payload
            }
        }
        case redux.SET_CUSTOM_ID: {
            return {
                ...initialState,
                ...payload
            }
        }
        case redux.RESET: {
            return { ...initialState }
        }
        default: {
            return state
        }
    }
}

export const getInitState = (store: reducer.IStore) => store.initState
