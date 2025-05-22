const mongoose = require('mongoose');
// Define the User schema
const SeoProjectSchema = new mongoose.Schema({
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
const SeoProject = mongoose.model('SeoProject', SeoProjectSchema);
module.exports = SeoProject;
