const { Pool } = require('pg')

module.exports = new Pool({
    user:'postgres',
    password:'docker',
    host:'localhost',
    port:'5482',
    database:'launchstore'
})