const { connect, connection } = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI || `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`

connect(mongoURI)
.then(() => {console.log(`Connected to MongoDB @ ${mongoURI}`);})
.catch((err) => {console.error('Connection error: ',err)});

module.exports = connection;
