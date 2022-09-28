const jsonEntrada = '{"nome":"Leonardo","idade": 25,"professor": true,"turmas":[10,12,34,42],"endereco":{ "rua":"alameda teste", "numero":123,"bairro":"centro","CEP":"123.123-12"}}'

const obj = JSON.parse(jsonEntrada);

console.log(obj.turmas);

obj.turmas.map( function(valor, posicao) {
    console.log(`posição: ${posicao}, valor: ${valor}`);
});

obj.nome += " Orabona";
obj.salario = 10000;

console.log(obj);

const jsonString = JSON.stringify(obj);
console.log(jsonString);
