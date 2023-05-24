import { all } from 'redux-saga/effects'
import fetchInit from 'sagas/watchers/init'
import fetchProject from 'sagas/watchers/project'

export default function * watcher () {
    yield all([
        fetchInit(),
        fetchProject()
    ])
}
