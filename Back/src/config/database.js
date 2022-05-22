const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/pokemonControll'
mongoose.connect(url);
module.exports = mongoose;