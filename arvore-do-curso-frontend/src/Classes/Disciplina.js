class Disciplina {
    constructor(nome, estado) {
        ;(this.nome = nome), (this.estado = estado)
    }
    //Getters
    get Nome() {
        return this.nome
    }
    get Estado() {
        return this.estado
    }
    //Setters
    set nomeDisciplina(nomeDisciplina) {
        this.nome = nomeDisciplina
    }
    set estadoDisciplina(estadoDisciplina) {
        this.estado = estadoDisciplina
    }
}
