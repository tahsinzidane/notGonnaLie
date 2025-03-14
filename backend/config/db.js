const mongoose = require('mongoose');
const localDb = 'mongodb://localhost:27017/not-gonna-lie'

const ConnectDB = mongoose.connect(process.env.DB_URI || localDb, {})
    .then(() => {
        console.log(`db connected`);

    })
    .catch(error => {
        console.log(`db connection error`);

    })

module.exports = ConnectDB;    