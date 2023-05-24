import { call, put } from 'redux-saga/effects'
import type { SagaIterator } from 'redux-saga'
import * as api from 'api'
import type * as action from 'types/action'
import { finishLoader, startLoader } from 'actions/loader'
import { fetchProjectSuccess } from 'actions/project'
import { clearError, fetchError } from 'actions/error'

export function * fetchProject (action: action.IProjectRequest): SagaIterator {
    try {
        yield put(clearError())
        yield put(startLoader())
        const { payload } = action
        const { data } = yield call(api.fetchProject, payload)
        yield put(fetchProjectSuccess(data))
    } catch (error) {
        yield put(fetchError(error))
    } finally {
        yield put(finishLoader())
    }
}
