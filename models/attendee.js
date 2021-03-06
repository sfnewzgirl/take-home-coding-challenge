var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AttendeeSchema = new Schema({
  name: String,
  company: String,
  email: String,
  registered: Date
});

var Attendee = mongoose.model('Attendee', AttendeeSchema);
module.exports = Attendee;
