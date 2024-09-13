const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number },
  weight: { type: Number },
  bodyType: { type: String },
  ethnicity: { type: String },
  birthplaceLocation: { type: String },
  currentLocation: { type: String },
  hairColor: { type: String },
  eyeColor: { type: String },
  hairType: { type: String },
  gender: { type: String },
  deviceType: { type: String },
  interests: [{ type: String }],
  hobbies: [{ type: String }],
  expectations: [{ type: String }],
  profilePicture: { type: String },
  additionalPhotos: [{ type: String }],
});

module.exports = mongoose.model('User', userSchema);

