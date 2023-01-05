 const mongoose = require("mongoose");
 const uniqueValidator = require("mongoose-unique-validator");
 const plugin = require("../plugin");
 const Schema = mongoose.Schema;

 const MessageSchema = new Schema({
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
