/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable('songs', tbl => {
    tbl.increments();
    tbl.integer('artist_id')
        .unsigned()
        .references('id')
        .inTable('artists')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('album_id')
        .unsigned()
        .references('id')
        .inTable('albums')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('album_artist_id')
        .unsigned()
        .references('id')
        .inTable('artists')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.integer('disc_number')
        .unsigned();
    tbl.integer('track_number')
        .unsigned();
    tbl.integer('producer_id')
        .unsigned()
        .references('id')
        .inTable('producers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl.text('song_title')
        .notNullable();
    tbl.text('song_path')
        .notNullable();
    tbl.integer('year')
        .unsigned();
    tbl.integer('genre_id')
        .unsigned()
        .references('id')
        .inTable('genres')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTableIfExists('songs');
};
