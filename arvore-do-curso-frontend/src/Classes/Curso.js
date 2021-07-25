class Curso {
    constructor(nome, qtdperiodos, id){
        this.nome = nome,
        this.qtdperiodos = qtdperiodos,
        this.id = id   
    }
    //Getters
    get Nome() {
        return this.nome
    }
    get QtdPeriodos() {
        return this.qtdperiodos
    }
    get Id(){
        return this.id
    }
    //Seters
    set nomeCurso(nomeCurso) {
        this.nome = nomeCurso
    }
    set periodosCurso(periodosCurso) {
        this.qtdperiodos = periodosCurso
    }
    set idCurso(idCurso) {
        this.id = idCurso
    }
}
