const Usuario = require("../model/usuario");

const loginService = (email) => Usuario.findOne({ email });

module.exports = { loginService };