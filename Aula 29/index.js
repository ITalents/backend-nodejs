const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("hello world");
});

app.post("/login", async  (req, res) => {
    try{
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if(!user){
        return res.status(400).send({ message: "Usuario nao encontrado, tente novamente"});
        }

        if(senha != user.senha){
            return res.status(400).send({ message: "Senha invalida"});
        }

        res.send(user);
    }catch(err){
        console.log(`erro: ${err}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});