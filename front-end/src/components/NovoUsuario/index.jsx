import React from 'react'

import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'
import Button from '../Button'

import Usuario from '../../model/Usuario'



class NovoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: new Usuario(),
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
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
    actualizarGenero(e, genero) {
        e.preventDefault();
        let usuario = this.state.usuario;
        usuario.genero = genero;
        this.setState({
            usuario: usuario
        })
    }
    validar(e) {
        e.preventDefault();
        let usuario = this.state.usuario;
        let validacao = this.state.validacao;
        validacao.nomeInvalido = !usuario.validarNome();
        validacao.generoInvalido = !usuario.validarGenero();
        this.setState({
            validacao: validacao
        })
        console.log('O botao proximo foi clicado...')
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
                        maxLength="40"
                        valorInvalido={this.state.validacao.nomeInvalido}
                        onChange={this.atualizarNome.bind(this)}
                    />
                    <GenderSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        actualizarGenero={this.actualizarGenero.bind(this)}
                    />
                    <Button
                        principal
                        texto="Proximo"
                        onClick={this.validar.bind(this)}
                    />
                </form>

            </div>
        )
    }
}

export default NovoUsuario