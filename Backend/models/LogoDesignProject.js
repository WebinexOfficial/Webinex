const mongoose = require('mongoose');
// Define the User schema
const LogoDesignProjectSchema = new mongoose.Schema({
 Title: {
 type: String,
 required: true,
 unique: true,
 },
 image: {
 type: String,
 required: true,
 unique: true,
 },
 description: {
 type: String,
 required: true,
 },
 projectLink: {
 type: String,
 required: true,
 },
 tags: {
 type: String,
 required: true,
 },
 createdAt: {
 type: Date,
 default: Date.now,
 },
});
// Create the User model from the schema
const LogoDesignProject = mongoose.model('LogoDesignProject', LogoDesignProjectSchema);
module.exports = LogoDesignProject;
