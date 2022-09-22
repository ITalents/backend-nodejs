function Carro(modelo, ano, marca, combustivel){
    this.modelo = modelo,
    this.ano = ano,
    this.marca = marca,
    this.combustivel = combustivel
}
let carros = [];

carros[0] = new Carro("fusca",1976,"volkswagem","gasolina");

carros[1] = new Carro("uno",2010,"fiat","flex");

console.log(carros);