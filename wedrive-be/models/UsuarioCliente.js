const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
  direccion: {
      type: String,
  },
  usuario: {
    type: SchemaTypes.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

const Cliente = model('Cliente', clienteSchema);
module.exports = Cliente;