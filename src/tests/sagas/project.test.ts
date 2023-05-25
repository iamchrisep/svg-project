import { call, put, select } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import * as mock from 'tests/mock'
import * as worker from 'sagas/workers/project'
import * as api from 'api'
import * as redux from 'constants/redux'
import { getInitState } from 'reducers/init'

describe('Project saga', () => {
    const data = mock.fetchProjectApiResponse
    const invalidData = mock.fetchProjectInvalidApiResponse

    describe('success', () => {
        const it = sagaHelper(worker.fetchProject() as any)

        it('clear error', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.clearErrorAction)
        })

        it('start loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.startLoaderAction)
        })

        it('select id', result => {
            expect(result).toMatchObject(select(getInitState));
            return true;
        });

        it('fetch project', result => {
            // @ts-ignore
            expect(result).toEqual(call(api.fetchProject, undefined))
            return { data }
        })

        it('dispatch data', result => {
            expect(result).toEqual(
                put({
                    type: redux.FETCH_PROJECT_SUCCESS,
                    payload: data
                })
            )
        })

        it('finish loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.finishLoaderAction)
        })
    });

    describe('invalid', () => {
        const it = sagaHelper(worker.fetchProject() as any)

        it('clear error', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.clearErrorAction)
        })

        it('start loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.startLoaderAction)
        })

        it('select id', result => {
            expect(result).toMatchObject(select(getInitState));
            return true;
        });

        it('fetch project', result => {
            // @ts-ignore
            expect(result).toEqual(call(api.fetchProject, undefined))
            return { invalidData }
        })

        it('dispatch error', result => {
            expect(result).toEqual(
                put({
                    type: redux.FETCH_ERROR,
                    payload: mock.fetchErrorApiResponse
                })
            )
        })

        it('finish loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.finishLoaderAction)
        })
    });

    describe('error', () => {
        const it = sagaHelper(worker.fetchProject() as any)

        it('clear error', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.clearErrorAction)
        })

        it('start loader', result => {
            // @ts-ignore
            expect(result.payload).toEqual(mock.startLoaderAction)
        })

        it('select id', result => {
            expect(result).toMatchObject(select(getInitState));
            return true;
        });

        it('fetch project', result => {
            // @ts-ignore
            expect(result).toEqual(call(api.fetchProject, undefined))
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
