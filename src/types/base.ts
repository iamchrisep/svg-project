export interface ILoader {
    isLoading: boolean
}

export interface IError {
    isError?: boolean
    status?: string
}

export interface IDetails {
    id: string
    name: string
}

export interface IInit {
    id: string
    name: string
    modified: number
}

export interface IItem {
    id: string
    type: 'rectange' | 'ellipse' | string
    color: string
    rotation: number
    x: number
    y: number
    width: number
    height: number
}

export interface IProject {
    id: string
    project: {
        id: string
        name: string
        width: number
        height: number
        items: IItem[]
    }
}
