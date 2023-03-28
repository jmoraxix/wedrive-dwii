const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const puntoCargaSchema = new Schema({
    tipo:  {
      type: String,
      required: true,
    },
    costoHora: {
      type: Number,
      required: true,
    },
    kiloWatts: {
      type: Number,
      required: true,
    },
    abastecedor: {
      type: SchemaTypes.ObjectId,
      ref: 'Abastecedor',
      required: true,
    },
  });

const PuntoCarga = model('PuntoCarga', puntoCargaSchema);
export default PuntoCarga;