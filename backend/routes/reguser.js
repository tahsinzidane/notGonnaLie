const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.post('/register-user', async (req, res) => {
    try {
        const { username, age } = req.body;

        // Check if all fields are provided
        if (!username || !age) {
            return res.status(400).json({
                message: 'All fields are required, bruh'
            });
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                message: 'Username already exists. Please choose a different username.'
            });
        }

        // Create new user
        const user = new User({
            username,
            age
        });

        // Save the user
        const savedUser = await user.save();

        // Generate the unique ask link
        const userLink = `http://localhost:8000/ask/${savedUser._id}`;

        // Return success response with the user data and ask link
        res.status(201).json({
            message: 'User saved successfully',
            user: savedUser,
            askLink: userLink // Returning the unique question URL
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: 'Error creating user, backend dev will pay for it'
        });
    }
});



module.exports = router;
