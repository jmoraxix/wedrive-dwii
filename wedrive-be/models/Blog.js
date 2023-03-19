const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title:  {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    author: {
      type: SchemaTypes.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    content: String,
    tags: [String],
    createdAt: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
    updatedAt: Date,
    comments: [{
      usuario: {
        type: SchemaTypes.ObjectId,
        ref: 'Usuario',
        required: true,
      },
      content: String,
      votes: Number
    }]
  });

blogSchema.pre('save', function(next) {
  this.updated = Date.now(); // update the date every time a blog post is saved
  next();
});

const Blog = model('Blog', blogSchema);
export default Blog;