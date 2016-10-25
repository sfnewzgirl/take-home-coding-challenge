var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SpeakerSchema = new Schema({
  name: String,
  company: String,
  email: String,
  bio: String
})

var Speaker = mongoose.model('Speaker', SpeakerSchema);
module.exports = Speaker;
