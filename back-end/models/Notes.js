const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Specify a unique name for the index
noteSchema.index({ title: 1 }, { name: 'title_index', sparse: true });

module.exports = Note;
