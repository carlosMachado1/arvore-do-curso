const knex = require('../database')

module.exports = {
    async store(request, response) {
        const {email, password} = request.body

        const user = await knex('users').where({ email })
        if(!user) {
            return response.status(404).send({message: 'Not Found or credentials are wrong'})
        }
        console.log(user)

        if(password !== user[0].password) {
            return response.status(404).send({message: 'Not Found or credentials are wrong'})
        }

        return response.json({user: {
            name: user[0].name,
            id: user[0].id
        }})
    },
}