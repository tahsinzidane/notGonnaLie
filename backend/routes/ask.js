const express = require('express');
const Question = require('../models/ques');
const User = require('../models/users');
const router = express.Router();

// // Post route to ask a question
// router.post('/:userId', async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { questionText } = req.body;

//         if (!questionText) {
//             return res.status(400).json({
//                 message: 'Question cannot be empty.'
//             });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({
//                 message: 'User not found.'
//             });
//         }

//         const newQuestion = new Question({
//             userId: user._id,
//             questionText,
//         });

//         const savedQuestion = await newQuestion.save();

//         res.status(201).json({
//             message: 'Question asked successfully',
//             question: savedQuestion
//         });

//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// });



router.post('/submit-question/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { question } = req.body;

        // Validate that the question is provided
        if (!question) {
            return res.status(400).json({
                message: 'Question is required!'
            });
        }

        // Find the user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found!'
            });
        }

        // Save the question in the database
        const newQuestion = new Question({
            userId,
            question,
            date: new Date()
        });

        // Save the new question to the database
        await newQuestion.save();

        // Send a success response with a JSON message
        res.status(201).json({
            message: 'Your question has been successfully submitted!',
            questionData: {
                userId,
                question,
                date: new Date()
            }
        });
    } catch (error) {
        console.error('Error submitting question:', error);
        res.status(500).json({
            message: 'Error submitting the question. Please try again.'
        });
    }
});

// get submit question UI
router.get('/ask/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId); // fixed the syntax

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render('askQues', { user }); // send user to EJS if needed
    } catch (error) {
        console.error("Error loading question page:", error.message);
        res.status(500).send("Something went wrong");
    }
});


module.exports = router;
