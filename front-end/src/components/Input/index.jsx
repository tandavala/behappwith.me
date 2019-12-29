import React from 'react'


const Input = (props) => {
    const estilo = {
        borderColor: props.valorInvalido ? "#d50000" : "#cccccc",
        backgroundColor: props.valorInvalido ? "#ffcdd2" : "#ffffff"
    }
    return (
        <input type="text" style={estilo}  {...props} />
    )
}
export default Input