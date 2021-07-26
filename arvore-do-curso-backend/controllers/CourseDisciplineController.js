const knex = require('../database')

module.exports = {
    async index(request, response) {
        const results = await knex('courses_disciplines')

        return response.json(results)
    },

    async store(request, response, next) {
        try {
            const {course_id, discipline_id} = request.body

            await knex('courses_disciplines').insert({
                course_id,
                discipline_id
            })

            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    },
}