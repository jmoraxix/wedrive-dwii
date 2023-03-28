const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const abastecedorSchema = new Schema({
    cliente: {
      type: SchemaTypes.ObjectId,
      ref: 'Cliente',
      required: true,
    },
    vehiculo: {
      type: SchemaTypes.ObjectId,
      ref: 'Vehiculo',
      required: true,
    },
    fechaCompra: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
  });

const Abastecedor = model('Abastecedor', abastecedorSchema);
export default Abastecedor;