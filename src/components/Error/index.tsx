import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import type { IError } from 'types/base'
import error from 'error.png'
import type { IStore } from 'types/reducer'
import { getErrorState } from 'reducers/error'

const Error: React.FC<IError> = ({
    status
}) => {
    return (
        <div className="error">
            <img
                alt="error"
                src={error}
                className="error__icon"
            />
            <span>
                Oops! Something went wrong.
                <br />
                Error
                {' '}
                &mdash;
                {' '}
                <span className="error__status">
                    {status}
                </span>
            </span>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({
    status: getErrorState(store).status
})

export default connect(mapStateToProps)(Error)
