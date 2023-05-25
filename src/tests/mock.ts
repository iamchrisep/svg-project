import * as reducer from 'types/reducer'
import * as base from 'types/base'
import * as action from 'types/action'
import * as redux from 'constants/redux'
import * as saga from 'constants/saga'

export const errorMessage = 'Invalid project data'

export const errorState: reducer.IError = {
    isError: false,
    error: undefined
}
export const fetchErrorApiResponse = {
    response: {
        data: {
            message: errorMessage
        }
    }
}

export const loaderState: reducer.ILoader = {
    isLoading: false
}

export const initState: reducer.IInit = {
    id: '',
    name: '',
    modified: 0
}
export const fetchInitApiResponse: reducer.IInit = {
    id: '123',
    name: 'Name',
    modified: 123
}
export const setCustomId: base.ICustomId = {
    id: '987'
}

export const projectState: reducer.IProject = {
    id: '',
    project: {
        id: '',
        name: '',
        width: 0,
        height: 0,
        items: []
    }
}
export const fetchProjectApiResponse: reducer.IProject = {
    id: '123',
    project: {
        id: '987',
        name: 'Name',
        width: 100,
        height: 100,
        items: [{
            id: '654',
            type: 'rectangle',
            color: '#000000',
            rotation: 90,
            x: 100,
            y: 200,
            width: 200,
            height: 100,
        }, {
            id: '456',
            type: 'ellipse',
            color: '#ffffff',
            rotation: 45,
            x: 200,
            y: 100,
            width: 100,
            height: 200,
        }]
    }
}
export const fetchProjectInvalidApiResponse: reducer.IProject = {
    id: '123',
    project: {
        id: '987',
        name: 'Name',
        width: 100,
        height: 100,
        items: [{
            id: '654',
            type: 'rectangle',
            color: '#000000',
            rotation: 90,
            x: -100,
            y: 200,
            width: 200,
            height: 100,
        }, {
            id: '456',
            type: 'ellipse',
            color: '#ffffff',
            rotation: -45,
            x: 200,
            y: 100,
            width: 100,
            height: 200,
        }]
    }
}

export const clearErrorAction: action.IActionType = {
    action: {
        type: redux.CLEAR_ERROR
    }
}

export const startLoaderAction: action.IActionType = {
    action: {
        type: redux.START_LOADER
    }
}
export const finishLoaderAction: action.IActionType = {
    action: {
        type: redux.FINISH_LOADER
    }
}

export const projectRequestAction: action.IActionType = {
    action: {
        type: saga.FETCH_PROJECT_REQUEST
    }
}
