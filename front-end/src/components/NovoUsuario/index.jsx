import React from 'react'

import Label from '../Label'
import Input from '../Input'

class NovoUsuario extends React.Component {
    render() {

        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label htmlFor="nome" texto="Quem e voce?" />
                    <Input id="nome" placeholder="Informar o nome" />
                </form>
            </div>
        )
    }
}

export default NovoUsuario