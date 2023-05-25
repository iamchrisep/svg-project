import loaderState from 'reducers/loader'
import * as redux from 'constants/redux'
import * as mock from 'tests/mock'

describe('Loader reducer', () => {
    let state = mock.loaderState

    const resetState = () => {
        return mock.loaderState
    }

    beforeEach(() => {
        state = resetState()
    });

    it(redux.START_LOADER, () => {
        state = loaderState(state, { type: redux.START_LOADER })
        expect(state.isLoading).toBeTruthy()
    })

    it(redux.FINISH_LOADER, () => {
        state = loaderState(state, { type: redux.FINISH_LOADER })
        expect(state.isLoading).toBeFalsy()
    })
})
