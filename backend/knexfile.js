export default {
    development: {
        client: 'better-sqlite3',
        connection: {
            filename: './db/development.db3',
        },
        useNullAsDefault: true,
        migrations: {
            directory: './migrations',
        },
    },
};