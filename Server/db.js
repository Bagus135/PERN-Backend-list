const {Pool} = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: "postgres://default:bmDAX0N6exMj@ep-empty-haze-a13riik7-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
  })

module.exports = pool;
