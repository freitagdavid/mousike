/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export const up = knex => {
    return knex.schema.createTable('artists', tbl => {
        tbl.increments('id');
        tbl.string('name', 255).notNullable();
        tbl.string('image_uri', 255).notNullable();
        tbl.string('spotify_id', 255).notNullable();
        tbl.text('summary', 255).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = knex => {
    return knex.schema.dropTableIfExists('artists');
};
