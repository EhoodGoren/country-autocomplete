import React from "react";

export default function Country(props) {
    return (
        <div onClick={props.onClick}>{props.name} ({props.code})</div>
    )
}