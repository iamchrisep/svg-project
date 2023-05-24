import React, { useEffect, useRef } from 'react'
import './style.css'
import type { IItem } from 'types/base'

const SVGElement: React.FC<IItem> = ({
    id,
    type,
    color,
    rotation,
    x,
    y,
    width,
    height
}) => {
    const elemRef = useRef<SVGGElement>(null)

    const addBox = () => {
        if (elemRef.current) {
            const bBox = elemRef.current.getBBox()
            const svgNS = 'http://www.w3.org/2000/svg'
            const rectNode = document.createElementNS(svgNS, 'rect')
            rectNode.setAttribute('width', String(bBox.width))
            rectNode.setAttribute('height', String(bBox.height))
            rectNode.setAttribute('fill', 'none')
            rectNode.setAttribute('stroke-width', '2')
            rectNode.setAttribute('stroke-opacity', '0.5')
            rectNode.setAttribute('stroke', '#cccccc')
            rectNode.setAttribute('transform', `translate(${bBox.x}, ${bBox.y})`)
            elemRef.current.appendChild(rectNode)
        }
    }

    useEffect(() => {
        addBox()
    }, [])

    return (
        <g key={id} ref={elemRef}>
            {type === 'rectangle' && (
                <rect
                    width={width}
                    height={height}
                    fill={color}
                    transform={`translate(${String(x)}, ${String(y)}) rotate(${String(rotation)})  translate(-${String(width / 2)}, -${String(height / 2)})`}
                />
            )}
            {type === 'ellipse' && (
                <ellipse
                    cx={width / 2}
                    cy={height / 2}
                    rx={width / 2}
                    ry={height / 2}
                    fill={color}
                    transform={`translate(${String(x)}, ${String(y)}) rotate(${String(rotation)})  translate(-${String(width / 2)}, -${String(height / 2)})`}
                />
            )}
            <circle
                fill="#333333"
                stroke="#ffffff"
                strokeWidth="2"
                cx={x}
                cy={y}
                r="4"
            />
            <text
                x={Number(x) + 6}
                y={Number(y) - 4}
                fill="#333333"
            >
                <tspan
                    className="canvas__text"
                >
                    {rotation}&deg;
                </tspan>
            </text>
        </g>
    )
}

export default SVGElement
