import React from 'react'

export default function Card(props) {
    return (
        <div className="card-board" onClick={props.onClick}>
            {props.value}
        </div>
    )
}
