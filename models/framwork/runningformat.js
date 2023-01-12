// import the necessary modules
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("models/plugin");
const Schema = mongoose.Schema;
const RunningFormatSchema = new Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true },
  prefix: { type: String, required: true },
  subfix: { type: String, required: true },
  initvalue: Number,
  valuelength: Number,
  interval: { type: String },
});

RunningFormatSchema.plugin(plugin);
RunningFormatSchema.plugin(uniqueValidator);
RunningFormatSchema.set("timestamps", true);

module.exports =
  mongoose.models.RunningFormat ||
  mongoose.model("RunningFormat", RunningFormatSchema);
