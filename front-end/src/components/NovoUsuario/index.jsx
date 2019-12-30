import React from 'react'

import Label from '../Label'
import Input from '../Input'
import GenderImage from '../GenderImage'

class NovoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                nome: ''
            },
            validacao: {
                nomeInvalido: true
            }

        }
    }
    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }
    render() {

        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label htmlFor="nome" texto="Quem e voce?" valorInvalido={this.state.validacao.nomeInvalido} />
                    <Input
                        id="nome"
                        name="nome"
                        readOnly={false}
                        placeholder="Digite o teu nome"
                        maxLength="40" defaultValue="tandavala"
                        valorInvalido={this.state.validacao.nomeInvalido}
                        onChange={this.atualizarNome.bind(this)}
                    />
                    <GenderImage genero="m" />
                </form>

            </div>
        )
    }
}

export default NovoUsuario