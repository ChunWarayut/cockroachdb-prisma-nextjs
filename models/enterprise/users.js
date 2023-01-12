var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  localMessage: { type: String, required: true },
  errMessage: String,
});

UserSchema.plugin(plugin);
UserSchema.plugin(uniqueValidator);
UserSchema.set("timestamps", true);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
