var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TalkSchema = new Schema({
  title: String,
  abstract: String,
  room: Number,
  speaker: [Speaker.Schema],
  attendees: [Attendee.Schema]
});

var Talk = mongoose.model('Talk', TalkSchema);
module.exports = Talk;
