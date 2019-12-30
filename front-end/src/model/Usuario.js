import Avatar from './Avatar'
import Repository from '../infrastructure/Repository'

const repository = new Repository()

class Usuario {
    constructor() {
        this.nome = ''
        this.genero = ''
        this.avatar = Avatar.obterTodos()[0]
    }

    validarNome() {
        console.log({ nome })
        return true
    }
    validarGenero() {
        return ['m', 'f'].some(param => {
            return this.genero === param
        })
    }
    toString() {
        return `${this.nome}, ${this.avatar.toString()}`
    }
    salvar(callback) {
        repository.salvar(this, callback)
    }
    static obter(sucesso, falha) {
        repository.obter(json => {
            let usuario = new Usuario()
            usuario.nome = json.nome
            usuario.genero = json.genero
            usuario.avatar = new Avatar(
                josn.avatar.index,
                json.avatar.descricao
            )
            sucesso(usuario);
        }, falha)
    }
}
export default Usuario