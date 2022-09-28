const json = '{"nome":"Leonardo","idade": 25,"professor": true}'
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.nome);

const pessoa = {
    nome: "Leonardo",
    sobrenome: "Orabona",
    idade: 25,
    altura: 1.88,
    professor: true,

    envelhecer: function(){
        this.idade += 1;
    }
}

//console.log(pessoa);

const json2 = JSON.stringify(pessoa);
console.log(json2);
