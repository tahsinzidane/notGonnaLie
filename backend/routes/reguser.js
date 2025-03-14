const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.post('/register-user', async (req, res) => {
    try {
        const { username, age } = req.body;

        if (!username || !age) {
            return res.status(400).json({
                message: 'all field are required brwh'
            })
        }

        const user = new User({
            username,
            age
        })


        const savedUser = await user.save();

        res.status(201).json({
            message: 'user saved',
            user: savedUser
        })


    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: 'error creating user, backend dev will pay for it'
        })
    }
})

module.exports = router;