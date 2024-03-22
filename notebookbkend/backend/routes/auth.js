const express=require('express');
const User=require('../models/User')
const router = express.Router();

const {body, validationResult} = require('express-validator')

router.post('/', [
    body('name', "Enter a valid username").isLength({ min: 3 }),
    body('email', "Invalid email").isEmail(),
    body('password', "Password length should be at least 5 characters").isLength({ min: 5 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const existingUser = await User.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
      }
  
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
  
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  });
  

module.exports = router;