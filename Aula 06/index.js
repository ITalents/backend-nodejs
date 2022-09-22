const pessoa = {
    nome: "Leonardo",
    sobrenome: "Orabona",
    altura: 1.88,
    idade: 25,

    envelhecer: function(anos){
        this.idade += anos;
    }
};

console.log(typeof(pessoa));
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.envelhecer(3);
console.log(pessoa.idade);