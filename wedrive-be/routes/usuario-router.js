const express = require('express')
const UsuarioController = require('../controllers/usuario-ctrl')

const router = express.Router()

router.get('/', UsuarioController.getAll)
router.get('/:id', UsuarioController.getById)
router.post('/', UsuarioController.create)
router.put('/:id', UsuarioController.updateById)
router.delete('/:id', UsuarioController.deleteById)

module.exports = router