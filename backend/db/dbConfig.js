import knex from 'knex';
import config from '../knexfile.js';

const RUNTYPE = process.env.NODE_ENV || 'development';

export default knex(config[RUNTYPE]);