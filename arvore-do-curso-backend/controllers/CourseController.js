const knex = require('../database')

module.exports = {
    async index(request, response) {
        const results = await knex('courses')

        return response.json(results)
    },

    async store(request, response, next) {
        try {
            const {name, amount_of_period} = request.body

            await knex('courses').insert({
                name,amount_of_period
            })

            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}