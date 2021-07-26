
exports.up = function(knex) {
    return knex.schema.createTable('courses', table => {
        table.increments('id')
        table.string('name')
        table.float('amount_of_period')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses')
};
