const express = require('express');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectDatabase = require("./dbConfig.js");


const app = express();
const PORT = 5000;
const client = new OAuth2Client();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
connectDatabase();


app.post('/google-auth', async (req, res) => {
  const { credential, client_id } = req.body;

  try {
    // Verify the ID token with Google's API
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });
    const payload = ticket.getPayload();

    const { email, given_name, family_name } = payload;

    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (!user) {
      // Create a new user if they don't exist
      user = await User.create({
        email,
        name: `${given_name} ${family_name}`,
        authSource: 'google',
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h', // Adjust expiration time as needed
    });

    // Send the token as a cookie and response
    res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true in production when using HTTPS
        maxAge: 3600000, // 1 hour in milliseconds
      })
      .json({ message: 'Authentication successful', user });
  } catch (err) {
    console.error('Error during Google Authentication:', err);
    res.status(400).json({ error: 'Authentication failed', details: err });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));