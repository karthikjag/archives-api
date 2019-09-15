import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: false,
  },
  year: {
    type: Date,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  catalogId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
});

const Game = mongoose.model('game', gameSchema);
export { Game };
