const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const administradorSchema = new Schema({
  rol: [string],
  usuario: {
    type: SchemaTypes.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

const Administrador = model('Administrador', administradorSchema);
module.exports = Administrador;