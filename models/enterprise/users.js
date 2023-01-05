 const mongoose = require("mongoose");
 const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");
 const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
  roleId: { type: Schema.ObjectId, ref: "Role" },
  isDefault: { type: Boolean, required: true, default: true },
});
UserRoleSchema.set("timestamps", true);

 const UserSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  localName: { type: String, required: true },
  supplierId: { type: Schema.ObjectId, ref: "Supplier", index: true },
  phoneNumber: String,
  mobileNumber: String,
  fax: String,
  email: String,
  userRoles: [UserRoleSchema],
  password: { type: String, required: true },
  isLocked: Boolean,
  lastLoginDate: Date,
});

UserSchema.plugin(plugin);
UserSchema.plugin(uniqueValidator);
UserSchema.set("timestamps", true);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
