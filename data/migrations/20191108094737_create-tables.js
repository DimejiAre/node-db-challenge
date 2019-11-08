
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments()
        table.string('name', 128).notNullable()
        table.string('description')
        table.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments()
        table.string('name', 128).unique().notNullable()
        table.string('description')
    })
    .createTable('tasks', table => {
        table.increments()
        table.string('description').notNullable()
        table.string('notes')
        table.boolean('completed').notNullable().defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
    })
    .createTable('projects_resources', table => {
        table.increments()
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
