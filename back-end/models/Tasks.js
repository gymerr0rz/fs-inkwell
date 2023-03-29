const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ['todo', 'in_progress', 'done'],
      default: 'todo',
    },
    date: { type: String, required: true },
    border_color: {
      type: String,
      default: '#FFFFFF',
    },
  },
  { timestamps: true }
);

// Specify a unique name for the index
taskSchema.index({ title: 1 }, { name: 'title_index', sparse: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
