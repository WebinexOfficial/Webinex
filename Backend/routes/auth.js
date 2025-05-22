const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const catchAsync = require('../core/catchAsync');
const dotenv = require('dotenv');
const router = express.Router();
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/register', catchAsync(async(req,res)=>{
    const {username, email, password, confirmPassword} = req.body;
    
    //checking if user with given username already exits
    const isUserAlreadyExist = await User.findOne({username});
    if(isUserAlreadyExist) throw new BadRequestError('Username already exists');
    if(password !== confirmPassword) throw new BadRequestError('Passwords do not match');
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    //create user in database.
    const user = await User.create({username, email, password: hashedPassword});
    res.status(201).json({message:"User created successfully"})
    
}));


// Email/Password Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // ✅ Proper user lookup
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { email: user.email, username: user.username, name: user.name } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Google OAuth Login
router.post('/google', async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res.status(400).json({ message: 'Missing ID token (credential)' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name, avatar: picture, authSource: 'google' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (error) {
    console.error('Google Login Error:', error.message);
    res.status(500).json({ message: 'Google authentication failed' });
  }
});
module.exports = router;