const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String },

  authSource: { type: String, enum: ['local', 'google'], },
});

module.exports = mongoose.model('User', userSchema);
