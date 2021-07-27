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
    },

    async update(request, response, next) {
        try {
            const {name, state} = request.body
            const {id} = request.params

            const disciplineUpdated = await knex('disciplines').update({
                name, state
            }).where({ id })

            return response.status(204).json(disciplineUpdated)
        } catch (error) {
            next(error)
        }
    },

    async delete(request, response, next) {
        try {
            const {id} = request.params

            await knex('disciplines').where({ id }).del()

            return response.status(204).send()
        } catch (error) {
            next(error)
        }
    }
}