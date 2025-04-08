const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.post('/register-user', async (req, res) => {
    try {
        const { username, age, gender } = req.body;

        // Check if all fields are provided
        if (!username || !age || !gender) {
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

        // Create new user instance
        const user = new User({
            username,
            age,
            gender
        });

        // Save the user first to get the generated ID
        const savedUser = await user.save();

        // Generate the unique ask link
        const userLink = `http://localhost:8000/ask/${savedUser._id}`;

        // Update the user with the generated link
        savedUser.askLink = userLink;
        // Save the updated user
        await savedUser.save();

        // Return success response with the user data and ask link
        res.status(201).json({
            message: 'User saved successfully',
            user: savedUser,
            // Returning the unique question URL
            askLink: userLink
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: 'Error creating user, backend dev will pay for it'
        });
    }
});


// get all users (for admin moderation)
router.get('/users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({}, 'username age askLink');

        // If no users found, return a message
        if (users.length === 0) {
            return res.status(404).json({
                message: 'No users found'
            });
        }

        // Return the list of users
        res.status(200).json({
            message: 'Users fetched successfully',
            users
        });

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            message: 'Error fetching users, backend dev is under attack'
        });
    }
});


module.exports = router;
