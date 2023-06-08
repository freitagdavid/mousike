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
    tbl.integer('file_length').unsigned();
    tbl.integer('song_length').unsigned();
    tbl.integer('bit_rate').unsigned();
    tbl.integer('sample_rate').unsigned();
    tbl.integer('bpm').unsigned();
    tbl.decimal('rating', 2, 1);
    tbl.integer('play_count').unsigned();
    tbl.integer('skip_count').unsigned();
    tbl.dateTime('last_played');
    tbl.dateTime('last_skipped');
    tbl.dateTime('date_added');
    tbl.dateTime('date_modified');
    tbl.dateTime('date_released');
    tbl.dateTime('date_recorded');
    tbl.text('comment');
    tbl.text('lyrics');
    tbl.text('extended_tags');
    tbl.text('music_brainz_id');
    tbl.text('discogs_id');
    tbl.text('spotify_id');
    tbl.text('youtube_id');
    tbl.text('soundcloud_id');
    tbl.text('bandcamp_id');
    tbl.text('itunes_id');
    tbl.text('google_play_id');
    tbl.text('amazon_id');
    tbl.text('quality');
    tbl.text('occasion');
    tbl.text('mood');
    tbl.text('tempo');
    tbl.text('language');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTableIfExists('songs');
};
