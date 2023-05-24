import { takeLatest } from 'redux-saga/effects'
import * as saga from 'constants/saga'
import * as worker from 'sagas/workers/project'

export default function * fetchProject () {
    yield takeLatest(saga.FETCH_PROJECT_REQUEST, worker.fetchProject)
}
