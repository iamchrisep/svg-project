import React from 'react'
import { bindActionCreators } from 'redux'
import type { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { fetchInitRequest } from 'actions/init'
import './style.css'
import type { IStore } from 'types/reducer'
import { getInitState } from 'reducers/init'

interface Props {
    fetchInitRequest: () => void
}

const Form: React.FC<Props> = ({
    fetchInitRequest
}) => {
    const handleFetch = () => {
        fetchInitRequest()
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
            />
            <button
                className="button"
                onClick={() => { handleFetch() }}
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
    fetchInitRequest: bindActionCreators(fetchInitRequest, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
