import React from 'react'

import Label from '../Label'

class NovoUsuario extends React.Component {
    render() {

        return (
            <div className="center">
                <form>
                    <Label htmlFor="nome" texto="Quem e voce?" />
                </form>
            </div>
        )
    }
}

export default NovoUsuario