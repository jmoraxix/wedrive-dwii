const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
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
  direccion: {
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

const Cliente = model('Cliente', clienteSchema);
module.exports = Cliente;