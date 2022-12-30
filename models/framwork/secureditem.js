// import the necessary modules
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");
const Schema = mongoose.Schema;


const SecuredItemSchema = new Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
});

SecuredItemSchema.plugin(plugin);
SecuredItemSchema.plugin(uniqueValidator);
SecuredItemSchema.set("timestamps", true);

module.exports =
  mongoose.models.SecuredItem ||
  mongoose.model("SecuredItem", SecuredItemSchema);
