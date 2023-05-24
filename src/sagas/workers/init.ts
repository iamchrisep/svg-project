import { call, put } from 'redux-saga/effects'
import type { SagaIterator } from 'redux-saga'
import * as api from 'api'
import { finishLoader, startLoader } from 'actions/loader'
import { fetchInitSuccess } from 'actions/init'
import { fetchProjectRequest } from 'actions/project'
import { clearError, fetchError } from 'actions/error'

export function * fetchInit (): SagaIterator {
    try {
        yield put(clearError())
        yield put(startLoader())
        const { data } = yield call(api.fetchInit)
        yield put(fetchInitSuccess(data))
        const id: string = data.id
        if (id.length > 0) {
            yield put(fetchProjectRequest(id))
        }
    } catch (error) {
        yield put(fetchError(error))
        yield put(finishLoader())
    }
}
