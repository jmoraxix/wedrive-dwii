const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const abastecedorSchema = new Schema({
    ubicacion:  {
      type: String,
      required: true,
    },
    puntosCarga: [{
      type: SchemaTypes.ObjectId,
      ref: 'PuntoCarga',
      required: true,
    }]
  });

const Abastecedor = model('Abastecedor', abastecedorSchema);
export default Abastecedor;