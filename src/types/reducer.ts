import type * as base from 'types/base'

export interface IStore {
    errorState: IError
    loaderState: ILoader
    initState: IInit
    projectState: IProject
}

export interface IError extends base.IError {}

export interface ILoader extends base.ILoader {}

export interface IInit extends base.IInit {}

export interface IProject extends base.IProject {}
