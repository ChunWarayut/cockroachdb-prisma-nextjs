// import the necessary modules
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");
const Schema = mongoose.Schema;

const RoleSecuredItemSchema = new Schema({
  securedItemId: { type: Schema.ObjectId, ref: "SecuredItem" },
});
RoleSecuredItemSchema.set("timestamps", true);

const RoleSchema = new Schema({
  code: { type: String, required: true, index: true },
  name: { type: String},
  description: String,
  landingPage: String,
  roleSecuredItems: [RoleSecuredItemSchema],
});

RoleSchema.plugin(plugin);
RoleSchema.plugin(uniqueValidator);
RoleSchema.set("timestamps", true);

module.exports = mongoose.models.Role || mongoose.model("Role", RoleSchema);
