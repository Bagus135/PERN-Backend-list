const {Pool} = require('pg');
require('dotenv').config();

const pool  = new Pool ({
    connectionString : process.env.SupaLink
})


module.exports = pool;
