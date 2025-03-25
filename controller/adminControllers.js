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

const registro = (req, res)=>{
    console.log(req.body);
}

const forgotAdmin = (req, res)=>{
    res.render("./auth/forgot", {
        pagina : "Olvidaste la contraseña"
    });
}

export {
    loginAdmin,registerAdmin,forgotAdmin, registro
}