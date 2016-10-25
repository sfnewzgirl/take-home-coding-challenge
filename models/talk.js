var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TalkSchema = new Schema({
  title: String,
  abstract: String,
  room: Number,
  speaker: {
    name: String,
    company: String,
    email: String,
    bio: String,
    attendees: [{
      type: Schema.Types.ObjectId,
      ref: 'Attendee'
    }]
  }
});

var Talk = mongoose.model('Talk', TalkSchema);
module.exports = Talk;
