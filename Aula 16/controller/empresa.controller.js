const find = (req,res) => {
    res.send("rota find");
}

const findAllEmpresas = (req,res) => {
    res.send("todas as empresas listadas");
}

const createEmpresa = (req,res) => {
    res.send("empresa criada com sucesso");
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa
}