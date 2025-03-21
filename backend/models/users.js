const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    askLink:{
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema);