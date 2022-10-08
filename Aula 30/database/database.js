const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/aulas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    })
}

module.exports = connectToDatabase