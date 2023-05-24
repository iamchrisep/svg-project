import type * as reducer from 'types/reducer'
import type * as action from 'types/action'
import * as redux from 'constants/redux'

const initialState: reducer.IProject = {
    id: '',
    project: {
        id: '',
        name: '',
        width: 0,
        height: 0,
        items: []
    }
}

export default function projectState (state: reducer.IProject = initialState, action: action.IProjectSuccess) {
    const { type, payload } = action
    switch (type) {
        case redux.FETCH_PROJECT_SUCCESS: {
            return {
                ...state,
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

export const getProjectState = (store: reducer.IStore) => store.projectState
