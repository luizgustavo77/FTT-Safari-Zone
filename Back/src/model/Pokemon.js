const mongoose = require('../config/database');

const PokemonSchema = new mongoose.Schema(
    {
        code: { type: Number },
        externalNumber: { type: Number },
    }
);
module.exports = mongoose.model('Pokemon', PokemonSchema);