import * as reducer from 'types/reducer';
import * as base from 'types/base';

export const loaderState: reducer.ILoader = {
    isLoading: false
}

export const errorState: reducer.IError = {
    isError: false,
    error: undefined
}
export const fetchErrorApiResponse = {
    response: {
        data: {
            message: 'Error message'
        }
    }
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
