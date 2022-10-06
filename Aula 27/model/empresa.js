const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true},
    numFuncionarios: { type: Number, required: true},
    nacionalidade: {type: String}
});

const Empresa = mongoose.model("empresa",empresaSchema);

module.exports = Empresa;