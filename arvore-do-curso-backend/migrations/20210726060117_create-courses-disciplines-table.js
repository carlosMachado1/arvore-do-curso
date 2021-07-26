
exports.up = function(knex) {
  return knex.schema.createTable('courses_disciplines', table=>{
      table.increments()
      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.integer('discipline_id').unsigned().references('id').inTable('disciplines')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses_disciplines')
};
