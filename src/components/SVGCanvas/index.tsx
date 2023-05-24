import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import type { ICanvas } from 'types/base'
import type { IStore } from 'types/reducer'
import { getProjectState } from 'reducers/project'
import SVGElement from 'components/SVGElement'

const SVGCanvas: React.FC<ICanvas> = ({
    items,
    width,
    height
}) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            className="canvas"
        >
            <rect fill="#eeeeee" width="100%" height="100%" rx="4" ry="4" />
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox={`0 0 ${String(width)} ${String(height)}`}
            >
                <rect fill="#fafafa" width="100%" height="100%" />
                {items.map((item) => (
                    <SVGElement key={item.id} {...item} />
                ))}
            </svg>
        </svg>
    )
}

const mapStateToProps = (store: IStore) => ({
    items: getProjectState(store).project.items,
    width: getProjectState(store).project.width,
    height: getProjectState(store).project.height
})

export default connect(mapStateToProps)(SVGCanvas)
