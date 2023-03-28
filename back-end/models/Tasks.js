const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ['todo', 'in_progress', 'done'],
      default: 'todo',
    },
  },
  { timestamps: true }
);

// Specify a unique name for the index
taskSchema.index({ title: 1 }, { name: 'title_index', sparse: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
