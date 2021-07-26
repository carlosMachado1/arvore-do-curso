const knex = require('../database')

module.exports = {
    async index(request, response) {
        const results = await knex('users')

        return response.json(results)
    },

    async store(request, response, next) {
        try {
            const {name, email, password} = request.body

            await knex('users').insert({
                name, email, password
            })

            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}