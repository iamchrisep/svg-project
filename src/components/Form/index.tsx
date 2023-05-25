import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { fetchInitRequest, setCustomId } from 'actions/init'
import { fetchProjectRequest } from 'actions/project'
import './style.css'
import type { ICustomId } from 'types/base'
import type { IStore } from 'types/reducer'
import { getInitState } from 'reducers/init'

interface Props {
    setCustomIdAction: (payload: ICustomId) => void
    fetchInitRequest: () => void
    fetchProjectRequest: () => void
}

const Form: React.FC<Props> = ({
    setCustomIdAction,
    fetchInitRequest,
    fetchProjectRequest
}) => {
    const [customId, setCustomId] = useState('')

    const handleChange = (e: { target: HTMLInputElement }) => {
        setCustomId(e.target.value)
        setCustomIdAction({ id: e.target.value })
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleFetch()
        }
    }

    const handleFetch = () => {
        if (customId.length > 0) {
            fetchProjectRequest()
        } else {
            fetchInitRequest()
        }
    }

    return (
        <div className="form">
            <label htmlFor="id">
                Project ID:
            </label>
            <input
                id="id"
                type="text"
                placeholder="For random leave empty"
                value={customId}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <button
                className="button"
                onClick={() => { handleFetch() }}
                type="submit"
            >
                Fetch
            </button>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({
    id: getInitState(store).id,
    name: getInitState(store).name
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCustomIdAction: bindActionCreators(setCustomId, dispatch),
    fetchInitRequest: bindActionCreators(fetchInitRequest, dispatch),
    fetchProjectRequest: bindActionCreators(fetchProjectRequest, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
