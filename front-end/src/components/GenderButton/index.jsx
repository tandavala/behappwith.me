import React from 'react'
import GenderImage from '../GenderImage'

export default function GenderButton(props) {
    return (
        <a href="#!"
            className={props.selecionado ?
                "gender-button  active" :
                "gender-button"
            }
            onClick={e => props.actualizarGenero(e, props.genero)}
        >
            <GenderImage genero={props.genero} />
        </a>
    )
}