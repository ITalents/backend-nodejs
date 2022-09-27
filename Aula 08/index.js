const { Conta } = require("./funcoes");

const novaConta = new Conta(12345,0001,"123.123.123-12",100);

console.log(novaConta.saldo);

novaConta.depositar(250);

console.log(novaConta.saldo);

console.log(novaConta.sacar(100));

const message = novaConta.sacar(400);

console.log(message);

console.log(novaConta.saldo);