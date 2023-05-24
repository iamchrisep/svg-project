import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import type { IDetails } from 'types/base'
import type { IStore } from 'types/reducer'
import { getProjectState } from 'reducers/project'

const Details: React.FC<IDetails> = ({
    id,
    name
}) => {
    if (id.length === 0 || name.length === 0) return null
    return (
        <div className="details">
            <div className="details__field">
                <span className="details__label">
                    ID:
                </span>
                <span>
                    {id}
                </span>
            </div>
            <div className="details__field">
                <span className="details__label">
                    Name:
                </span>
                <span>
                    {name}
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (store: IStore) => ({
    id: getProjectState(store).project.id,
    name: getProjectState(store).project.name
})

export default connect(mapStateToProps)(Details)
