const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log(`User ${user.email} logged in at ${new Date()}`);
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Database error' });
    }
});

module.exports = router;
