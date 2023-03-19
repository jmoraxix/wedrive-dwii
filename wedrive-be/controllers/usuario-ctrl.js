const Usuario = require('../models/Usuario');

create = async(req, res)=>{
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe enviar un Objeto válido',
        })
    }

    const usuario = new Usuario(body);

    if (!usuario) {
        return res.status(400).json({ success: false, error: err });
    }

    usuario
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: usuario._id,
                message: 'Objeto creado exitosamente',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Objeto no creado',
            })
        })
}

updateById = async(req, res)=>{
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe enviar un objeto válido',
        })
    }

    Usuario.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body)
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'Objeto actualizado con exito',
            })
        })
        .catch(error => {
            return res.status(500).json({
                error,
                message: 'Error al actualizar objeto',
            })
        })
}

deleteById = async (req, res)=>{
    await Usuario.findOneAndDelete({ _id: req.params.id }, (err, obj) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!obj) {
            return res
                .status(404)
                .json({ success: false, error: `Objeto no existe` })
        }

        return res.status(200).json({ success: true, data: obj })
    }).catch(err => console.log(err))
}

getById = async(req, res)=>{
    await Usuario.findOne({ _id: req.params.id }, (err, obj) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: obj })
    }).catch(err => console.log(err))
}

getAll = async(req, res)=>{
    await Usuario.find({})
        .then(objs => {
            return res.status(200).json({ success: true, data: objs })
        })
        .catch(err => {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        });
}

module.exports = {
    create,
    updateById,
    deleteById,
    getById,
    getAll,
}