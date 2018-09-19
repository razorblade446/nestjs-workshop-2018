import { Schema } from 'mongoose';

export const bookSchema = new Schema(
  {
    createdAt: {
      required: false,
      type: Date
    },
    name: {
      required: true,
      type: String
    },
    genre: {
      required: true,
      type: String
    },
    stock: {
      required: true,
      type: Number
    },
    author: {
      required: true,
      type: String
    }
  },
  {collection: 'book', timestamps: {createdAt: true, updatedAt: false}}
);
