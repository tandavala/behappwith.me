import Avatar from './Avatar'

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
}
export default Usuario