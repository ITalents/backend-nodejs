const Usuario = require("../model/usuario");

const loginService = (email) => Usuario.findOne({ email });

const updateToken = (user) => {
    return Usuario.findByIdAndUpdate(user.id, user, { returnDocument: "after" });
}

module.exports = { 
    loginService, 
    updateToken 
};