import { call, put, select } from 'redux-saga/effects'
import type { SagaIterator } from 'redux-saga'
import * as api from 'api'
import { finishLoader, startLoader } from 'actions/loader'
import { fetchProjectSuccess } from 'actions/project'
import { clearError, fetchError } from 'actions/error'
import { getInitState } from 'reducers/init'

export function * fetchProject (): SagaIterator {
    try {
        yield put(clearError())
        yield put(startLoader())
        const { id } = yield select(getInitState)
        const { data } = yield call(api.fetchProject, id)
        yield put(fetchProjectSuccess(data))
    } catch (error: any) {
        yield put(fetchError(error))
    } finally {
        yield put(finishLoader())
    }
}
