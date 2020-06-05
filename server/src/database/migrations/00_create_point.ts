import Knex from 'knex';

export async function up(knex: Knex) {
    // CREATE
    return knex.schema.createTable('point', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('image').notNullable();
    });
}

export async function down(knex: Knex) {
    // ROLLBACK
    return knex.schema.dropTable('point');
}