const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    dateAsked: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
