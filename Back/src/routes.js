const express = require('express');
const route = express.Router();
const PokemonController = require('./controller/PokemonController');

// Rotas de produtos
route.post('/pokemon', PokemonController.create);
route.get('/pokemon', PokemonController.list);
route.get('/pokemon/:code', PokemonController.getById);
route.put('/pokemon/:code', PokemonController.update);
route.delete('/pokemon/:code', PokemonController.delete);

module.exports = route;