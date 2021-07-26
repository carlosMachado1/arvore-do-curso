const knex = require('../database')

module.exports = {
    async index(request, response) {
        const results = await knex('disciplines')

        return response.json(results)
    },

    async store(request, response, next) {
        try {
            const {name, state} = request.body

            await knex('disciplines').insert({
                name,
                state
            })

            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}