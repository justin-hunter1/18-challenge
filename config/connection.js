const { connect, connection } = require('mongoose');
require('dotenv').config();

// connect(process.env.MONGODB_URI)
connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`);
// connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = connection;
