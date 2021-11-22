import React from "react";

export default function Country(props) {
    return (
        <div
            className={'country'}
            onClick={props.onClick}
        >{props.name} ({props.code})</div>
    )
}