const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    contrasena: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
      type: String,
      minLength: 10,
      required: true,
      lowercase: true
    },
    activo: {
        type: Boolean,
        default: true,
    },
    fechaRegistro: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
});

const Usuario = model('Usuario', usuarioSchema);
module.exports = Usuario;