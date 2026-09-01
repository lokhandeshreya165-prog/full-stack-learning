import mongoose from 'mongoose';
const todoSchema = new mongoose.schema(
  {
    content: {
      type: string,
      required: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongoos.schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamp: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
