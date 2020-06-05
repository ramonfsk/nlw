import Knex from 'knex';

export async function up(knex: Knex) {
    // CREATE
    return knex.schema.createTable('item', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
}

export async function down(knex: Knex) {
    // ROLLBACK
    return knex.schema.dropTable('item');
}