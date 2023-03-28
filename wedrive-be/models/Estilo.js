const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const estiloSchema = new Schema({
    estilo:  {
      type: String,
      required: true,
    },
  });

const Estilo = model('Estilo', estiloSchema);
export default Estilo;