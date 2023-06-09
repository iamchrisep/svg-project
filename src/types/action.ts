import { ICustomId, IInit, IProject } from './base'

export interface IAction {
    type: string
}
export interface IActionData extends IAction {
    payload?: any
}
export interface IActionType {
    action: IActionData
}

export interface IError extends IAction {
    payload: any
}

export interface ILoader extends IAction {}

export interface IInitRequest extends IAction {}
export interface IInitSuccess extends IAction {
    payload: IInit
}
export interface ICustomIdSuccess extends IAction {
    payload: ICustomId
}

export interface IProjectRequest extends IAction {}
export interface IProjectSuccess extends IAction {
    payload: IProject
}
