
exports.up = function(knex) {
    return knex.schema.createTable('disciplines', table => {
        table.increments('id')
        table.string('name')
        table.boolean('state')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('disciplines')
};
