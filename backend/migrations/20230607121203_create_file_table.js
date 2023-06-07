/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// module.exports.up = function(knex) {
//   return knex.schema.createTable('files', tbl => {
//     tbl.increments();
//     tbl.string('name', 255).notNullable();
//     tbl.string('type', 255).notNullable();
//     tbl.string('uri', 255).notNullable();
//     tbl.string('size', 255).notNullable();
//     tbl.datetime('created_at').defaultTo(knex.fn.now());
//     tbl.datetime('updated_at').defaultTo(knex.fn.now());
//   });
// };

export const up = (knex) => {
  return knex.schema.createTable('files', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('type', 255).notNullable();
    tbl.string('uri', 255).notNullable();
    tbl.string('size', 255).notNullable();
    tbl.datetime('created_at').defaultTo(knex.fn.now());
    tbl.datetime('updated_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTableIfExists('files');
};