import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import type { IError } from 'types/base'
import errorImg from 'error.png'
import type { IStore } from 'types/reducer'
import { getErrorState } from 'reducers/error'

const Error: React.FC<IError> = ({
    error
}) => {
    return (
        <div className="error">
            <img
                alt="error"
                src={errorImg}
                className="error__icon"
            />
            <span>
                Oops! Something went wrong.
                {error?.response?.status && (
                    <>
                        <br />
                        Status
                        {' '}
                        &mdash;
                        {' '}
                        <span className="error__status">
                            {error.response.status}
                        </span>
                    </>
                )}
                {error?.response?.data?.message?.length > 0 && (
                    <>
                        <br />
                        Message
                        {' '}
                        &mdash;
                        {' '}
                        <span className="error__status">
                            {error.response.data.message}
                        </span>
                    </>
                )}
            </span>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({
    error: getErrorState(store).error
})

export default connect(mapStateToProps)(Error)
