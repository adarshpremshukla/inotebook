const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator')

// create a user using: POST "/api/auth/createuser". Doesn't require authentication
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid mail').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //if there are erros, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }
})

module.exports = router
