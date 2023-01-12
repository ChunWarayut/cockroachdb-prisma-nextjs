var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  status: { type: String, required: true },
  code: { type: String, required: true, index: true, unique: true },
  message: { type: String, required: true },
  messageThai: { type: String, required: true },
});
MessageSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Message", MessageSchema);
