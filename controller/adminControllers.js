import Usuario from "../models/Usuarios.js";

const loginAdmin = (req, res)=>{
    res.render("./auth/login", {
        pagina : "Login"
    });
}

const registerAdmin = (req, res)=>{
    res.render("./auth/register", {
        pagina : "Registro"
    });
}

const registro = async(req, res)=>{
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
};

const forgotAdmin = (req, res)=>{
    res.render("./auth/forgot", {
        pagina : "Olvidaste la contraseña"
    });
}

export {
    loginAdmin,registerAdmin,forgotAdmin, registro
}