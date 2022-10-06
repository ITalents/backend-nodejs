const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello world");
});

app.get("/mongo", (req,res) => {
    mongoose.connect('mongodb://localhost:27017/teste-gatos');

    const gatoSchema = {
        "nome": String,
        "idade": Number,
        "genero": String,
        "porte": String,
        "peso": Number,
        "docil": Boolean
    }

    const Cat = mongoose.model('Gato', gatoSchema);

    const gato = {
        nome: "Josias 2 ",
        idade: 5,
        genero: "M",
        porte: "medio",
        peso: 6,
        docil: false,
    }

    const kitty = new Cat(gato);

    kitty.save().then(() => console.log("gatinho salvo"));

    res.send("gatinho salvo com sucesso");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});