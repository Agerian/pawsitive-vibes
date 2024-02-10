const express = require('express');
const router = express.Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    console.log("Recieved User Body:", req.body);
    try {
      console.log('Creating user with data:', req.body);
      const newUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    console.log('User created successfully:', newUserData.toJSON()); // Log on success


    res.status(200).json(newUserData);
    } catch (err) {
      console.error('Signup Error:', err); // Log the detailed error 
      res.status(400).json(err);
    }
  });

  module.exports = router;