const addVehiculo = (req, res)=>{
    res.render("./vehiculos/carRegister", {
        pagina : "Registrar nuevo carro"
    })
}

const searchVehiculo = (req, res)=>{
    res.render("./vehiculos/search", {
        pagina : "Buscar un Carro "
    })
}

export {
    addVehiculo, searchVehiculo
}

