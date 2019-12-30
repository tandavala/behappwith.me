class Usuario {
    constructor() {
        this.nome = ''
        this.genero = ''
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