const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const jwt = require("jsonwebtoken");

const app = express();

connectToDatabase();

const port = 3000;
const segredo = "633f3d0a5f9d77fd83e93703";

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

        const token = authService.generateToken(user,segredo);
        res.status(200).send({
          user,
          token
        });
    }catch(err){
        console.log(`erro: ${err}`);
    }
});

app.get("/teste-token" , (req,res) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).send({ message: "O token nao foi informado!"});
  }

  const parts = authHeader.split(" ");

  if(parts.length !== 2){
    return res.status(401).send({ message: "token invalido!"});
  }

  const [scheme, token] = parts;

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({ message: "token malformatado!"});
  }

  jwt.verify(token, segredo, (err, decoded) => {

    if(err){
      console.log(`erro: ${err}`);
      return res.status(500).send({ message: `erro interno, tente novamente`});
    }
    console.log(decoded);
    res.send(decoded);
  });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});