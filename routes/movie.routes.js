const express = require('express');
const router = express.Router();
const { getMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller.js'); // Import des fonctions de contrôleur pour les films

router.get('/', getMovies);

router.get('/:id', getMovie); 

router.post('/', createMovie);

router.put('/:id', updateMovie); 

router.delete('/:id', deleteMovie); 

module.exports = router;
