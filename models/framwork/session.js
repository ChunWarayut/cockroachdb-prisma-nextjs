// import the necessary modules
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");
const Schema = mongoose.Schema;
const SessionSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: "User", index: true },
  roleId: { type: Schema.ObjectId, ref: "Role" },
  loginDate: Date,
  lastActivityDate: Date,
  logoutDate: Date,
  ipAddress: String,
});

SessionSchema.plugin(plugin);
SessionSchema.plugin(uniqueValidator);
SessionSchema.set("timestamps", true);

module.exports =
  mongoose.models.Session || mongoose.model("Session", SessionSchema);
