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
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Car/bike', 'None binary', 'Anime', 'Sigma']
    },
    askLink:{
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema);