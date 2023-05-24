import { all } from 'redux-saga/effects'
import fetchInit from './init'
import fetchProject from './project'

export default function * watcher () {
    yield all([
        fetchInit(),
        fetchProject()
    ])
}
