var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/api");

module.exports.Talk = require("./talk.js");
module.exports.Attendee = require("./attendee.js");
module.exports.Speaker = require("./speaker.js");
