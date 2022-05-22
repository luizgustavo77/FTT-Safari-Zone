const Pokemon = require('../model/Pokemon');

class PokemonController {
    async create(req, res) {
        const produto = new Pokemon(req.body);
        await Pokemon.count()
            .then(
                response => {
                    produto.code = response + 1;
                }
            )
            .catch(error => {
                produto.code = 1;
            })
        await produto.save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async list(req, res) {
        await Pokemon.find().sort("id")
            .then(
                response => {
                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async getById(req, res) {
        const { code } = req.params;

        await Pokemon.findById(code)
            .then(
                response => {
                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async update(req, res) {
        const produto = new Pokemon(req.body);
        await produto.findByIdAndUpdate(produto._id, req.body)
            .then(
                response => {
                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async delete(req, res) {
        const { code } = req.params;
        await Pokemon.findByIdAndDelete(code)
            .then(
                response => {
                    return res.status(200).json(response);
                }
            )
            .catch(error => {
                return res.status(500).json(error)
            })
    }
}

module.exports = new PokemonController();