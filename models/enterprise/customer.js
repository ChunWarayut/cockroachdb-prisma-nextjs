var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const plugin = require("models/plugin");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  localName: { type: String, required: true },
  description: String,
  address: { type: String, required: true },
  localAddress: { type: String, required: true },
  taxId:{ type: String, required: true },
  phoneNumber: String,
  mobileNumber: String,
  fax: String,
  email: String,
});

CustomerSchema.plugin(plugin);
CustomerSchema.plugin(uniqueValidator);
CustomerSchema.set("timestamps", true);

module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
