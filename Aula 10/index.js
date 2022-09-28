class Pessoa{
    constructor (nome, idade, altura, genero){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }

    infos = function(){
        return this.nome + " " + this.idade; 
    }
}

class Professor extends Pessoa{
    constructor (nome, idade, altura, genero, salario, turmas){
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = salario,
        this.turmas = turmas
    }

    infos = function(){
        return this.nome + " " + this.turmas + " " + this.salario; 
    }
}

class Aluno extends Pessoa{
    constructor (nome, idade, altura, genero, nota, turma, RM){
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.nota = nota,
        this.turma = turma,
        this.RM = RM
    }

    infos = function(){
        return this.nome + " " + this.idade + " " + this.RM; 
    }
}

const prof = new Professor("leonardo",25,1.88,"M",100000,[12,14,16]);
const estudante = new Aluno("Marcos", 16, 1.76, "M", 9.76, 14, 42564);

console.log(prof);
console.log(estudante);

console.log(prof.infos());
console.log(estudante.infos());