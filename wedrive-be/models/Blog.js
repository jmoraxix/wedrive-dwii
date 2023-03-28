const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    titulo:  {
      type: String,
      required: true,
    },
    publicado: {
      type: Boolean,
      default: false,
    },
    autor: {
      type: SchemaTypes.ObjectId,
      ref: 'Administrador',
      required: true,
    },
    contenido: String,
    fechaCreado: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
    fechaActualizado: Date,
    comentarios: [{
      usuario: {
        type: SchemaTypes.ObjectId,
        ref: 'Usuario',
        required: true,
      },
      content: String
    }]
  });

blogSchema.pre('save', function(next) {
  this.fechaActualizado = Date.now(); // Actualiza la fecha cada vez que se actualiza el blog
  next();
});

const Blog = model('Blog', blogSchema);
export default Blog;