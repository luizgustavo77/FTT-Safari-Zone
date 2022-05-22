const mongoose = require('../config/database');

const PokemonSchema = new mongoose.Schema(
    {
        code: { type: Number },
        externalNumber: { type: Number },
        area: { type: Number },
        hora: { type: String },
    }
);
module.exports = mongoose.model('Pokemon', PokemonSchema);