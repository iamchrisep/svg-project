import initState from 'reducers/init'
import * as redux from 'constants/redux'
import * as mock from 'tests/mock'

describe('Init reducer', () => {
    let state = mock.initState

    const resetState = () => {
        return mock.initState
    }

    beforeEach(() => {
        state = resetState()
    });

    it(redux.FETCH_INIT_SUCCESS, () => {
        const payload = mock.fetchInitApiResponse
        state = initState(state, { type: redux.FETCH_INIT_SUCCESS, payload })
        expect(state.id).toEqual('123')
        expect(state.name).toEqual('Name')
        expect(state.modified).toEqual(123)
    })

    it(redux.SET_CUSTOM_ID, () => {
        const payload = mock.setCustomId
        state = initState(state, { type: redux.SET_CUSTOM_ID, payload })
        expect(state.id).toEqual('987')
        expect(state.name).toEqual('')
        expect(state.modified).toEqual(0)
    })
})
