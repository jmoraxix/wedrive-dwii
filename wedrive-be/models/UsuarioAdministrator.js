const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const administradorSchema = new Schema({
  nombre: {
      type: String,
      trim: true,
      required: true,
  },
  primerApellido: {
      type: String,
      trim: true,
      required: true,
  },
  segundoApellido: {
      type: String,
      trim: true,
  },
  rol: {
      type: String,
  },
  usuario: {
    type: SchemaTypes.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  fechaNacimiento: {
    type: Date
  },
});

const Administrador = model('Administrador', administradorSchema);
module.exports = Administrador;