const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vehiculoSchema = new Schema({
    modelo:  {
      type: String,
      required: true,
    },
    marca: {
      type: SchemaTypes.ObjectId,
      ref: 'Marca',
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    annio: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    estilo: {
      type: SchemaTypes.ObjectId,
      ref: 'Estilo',
      required: true,
    },
    numPuertas: {
      type: Number,
      required: true,
    },
    cantPasajers: {
      type: Number,
      required: true,
    },
  });

const Vehiculo = model('Vehiculo', vehiculoSchema);
export default Vehiculo;