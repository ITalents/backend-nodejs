const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    console.log(token());
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
        user.token = token();
        await authService.updateToken(user);
        console.log(user);

        res.status(200).send(user);
    }catch(err){
        console.log(`erro: ${err}`);
    }
});

app.post("/validar", async (req,res) => {
    const {email, token} = req.body;

    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({ message: "Usuario nao encontrado, tente novamente"});
    }

    if(token != user.token){
        return res.status(400).send({ message: "token incorreto ou expirado, tente novamente"});
    }

    user.token = "";
    await authService.updateToken(user);

    res.status(200).send(user);
});

const token = function() {
    let token = Math.random().toString(36).substring(2);
    return token;
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});