const empresas = [
    {
        id: 1,
        nome: "empresa 1",
        numFuncionarios: 100
    },
    {
        id: 2,
        nome: "empresa 2",
        numFuncionarios: 1200
    },
    {
        id: 3,
        nome: "empresa 3",
        numFuncionarios: 5000
    },
]

const find = (req,res) => {
    const id = req.params.id;
    res.send(empresas[id]);
}

const findAllEmpresas = (req,res) => {
    res.send(empresas);
}

const createEmpresa = (req,res) => {
    const empresa = req.body;
    if(req.body.nome == null){
        return res.send({message:"corpo da mensagem esta vazio"});
    }
    empresas.push(empresa);
    res.send(empresas);
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa
}