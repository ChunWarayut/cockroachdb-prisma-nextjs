var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var plugin = require("../plugin");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  status: { type: String, required: true },
  code: { type: String, required: true, index: true, unique: true },
  message: { type: String, required: true },
  localMessage: { type: String, required: true },
  errMessage: String,
});

MessageSchema.plugin(plugin);
MessageSchema.plugin(uniqueValidator);
MessageSchema.set("timestamps", true);

module.exports =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
