import { takeLatest } from 'redux-saga/effects'
import * as saga from 'constants/saga'
import * as worker from 'sagas/workers/init'

export default function * fetchInit () {
    yield takeLatest(saga.FETCH_INIT_REQUEST, worker.fetchInit)
}
