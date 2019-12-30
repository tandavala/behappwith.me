class Repostory {
    constructor() {
        this.key = 'behappy-user'
    }
    salvar(json, callback) {
        let data = JSON.stringify(json)
        window.localStorage.setItem(this.key, data)
        callback()
    }
    obter(successo, falha) {
        let data = window.localStorage.getItem(this.key)
        let json = JSON.parse(data)

        if (json) {
            successo(json)
        } else {
            falha()
        }
    }
}
export default Repostory