import React from 'react'

const Label = (props) => {
    const estilo = {
        color: props.valorInvalido ? "#d50000" : "#444444"
    };

    return (
        <label style={estilo} htmlFor={props.htmlFor}>{props.texto}</label>
    )
}

export default Label;