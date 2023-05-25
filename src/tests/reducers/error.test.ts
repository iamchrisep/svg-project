import errorState from 'reducers/error'
import * as redux from 'constants/redux'
import * as mock from 'tests/mock'
import { errorMessage } from 'tests/mock'

describe('Error reducer', () => {
    let state = mock.errorState

    const resetState = () => {
        return mock.errorState
    }

    beforeEach(() => {
        state = resetState()
    });

    it(redux.FETCH_ERROR, () => {
        const payload = mock.fetchErrorApiResponse
        state = errorState(state, { type: redux.FETCH_ERROR, payload })
        expect(state.isError).toBeTruthy()
        expect(state.error.response.data.message).toEqual(mock.errorMessage)
    })

    it(redux.CLEAR_ERROR, () => {
        const payload = mock.fetchErrorApiResponse
        state = errorState(state, { type: redux.CLEAR_ERROR, payload })
        expect(state.isError).toBeFalsy()
        expect(state.error).toEqual(undefined)
    })
})
