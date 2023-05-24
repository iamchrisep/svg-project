import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import Loader from 'components/Loader'
import Error from 'components/Error'
import Details from 'components/Details'
import type { IStore } from 'types/reducer'
import { getLoaderState } from 'reducers/loader'
import type { IError, ILoader } from 'types/base'
import { getErrorState } from 'reducers/error'
import SVGCanvas from 'components/SVGCanvas'

const Content: React.FC<ILoader & IError> = ({
    isLoading,
    isError
}) => {
    if (isLoading) return <Loader />
    if (isError) return <Error />
    return (
        <>
            <Details />
            <SVGCanvas />
        </>
    )
}

const mapStateToProps = (store: IStore) => ({
    isLoading: getLoaderState(store).isLoading,
    isError: getErrorState(store).isError
})

export default connect(mapStateToProps)(Content)
