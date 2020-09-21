import { Pool } from 'pg';

module.exports = new Pool({
  user: 'postgres',
  password: 'docker',
  host: 'localhost',
  port: '5482',
  database: 'launchstore',
});
