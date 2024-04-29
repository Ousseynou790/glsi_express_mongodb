const Movies = require('../models/movie.model.js'); 

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find({}); 
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movies.findById(id); 
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createMovie = async (req, res) => {
  try {
    const { title, synopsis, year, producer, registered } = req.body;
    const movie = await Movies.create({ title, synopsis, year, producer, registered }); // Création d'un nouveau film avec les données extraites
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movies.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movies.findByIdAndDelete(id); 
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Suppression réussie" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
};
