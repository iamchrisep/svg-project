import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import * as mock from 'tests/mock'
import * as worker from 'sagas/workers/init'
import * as api from 'api'
import * as redux from 'constants/redux'

describe('Init saga', () => {
    const data = mock.fetchInitApiResponse

    describe('success', () => {
        const it = sagaHelper(worker.fetchInit() as any)

        it('clear error', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.clearErrorAction)
        })

        it('start loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.startLoaderAction)
        })

        it('fetch init', result => {
            expect(result).toEqual(call(api.fetchInit))
            return { data }
        })

        it('dispatch data', result => {
            expect(result).toEqual(
                put({
                    type: redux.FETCH_INIT_SUCCESS,
                    payload: data
                })
            )
        })

        it('fetch project', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.projectRequestAction)
        })
    });

    describe('error', () => {
        const it = sagaHelper(worker.fetchInit() as any)

        it('clear error', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.clearErrorAction)
        })

        it('start loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.startLoaderAction)
        })

        it('fetch init', result => {
            expect(result).toEqual(call(api.fetchInit))
            return new Error(mock.errorMessage)
        })

        it('dispatch error', result => {
            expect(result).toEqual(
                put({
                    type: redux.FETCH_ERROR,
                    payload: Error(mock.errorMessage)
                })
            )
        })

        it('finish loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.finishLoaderAction)
        })
    })
})
