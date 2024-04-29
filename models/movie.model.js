const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema(
  {
    title: String,
    synopsis: String,
    year: Number, 
    producer: String,
    registered: Boolean,
  },
  { timestamps: true }
);

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;
