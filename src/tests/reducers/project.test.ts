import projectState from 'reducers/project'
import * as redux from 'constants/redux'
import * as mock from 'tests/mock'

describe('Project reducer', () => {
    let state = mock.projectState

    const resetState = () => {
        return mock.projectState
    }

    beforeEach(() => {
        state = resetState()
    });

    it(redux.FETCH_PROJECT_SUCCESS, () => {
        const payload = mock.fetchProjectApiResponse
        state = projectState(state, { type: redux.FETCH_PROJECT_SUCCESS, payload })
        expect(state.id).toEqual('123')
        expect(state.project.id).toEqual('987')
        expect(state.project.items).toHaveLength(2)
        expect(state.project.items[0].type).toEqual('rectangle')
        expect(state.project.items[1].type).toEqual('ellipse')
    })
})
