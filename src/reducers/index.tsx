import { combineReducers } from 'redux'
import errorState from './error'
import loaderState from './loader'
import initState from './init'
import projectState from './project'

export default combineReducers({
    errorState,
    loaderState,
    initState,
    projectState
})
