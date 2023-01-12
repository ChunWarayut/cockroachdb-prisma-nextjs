var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const plugin = require("models/plugin");
var Schema = mongoose.Schema;
var ContractPersonSchema = new Schema({
  name: String,
  phoneNumber: String,
  mobileNumber: String,
  fax: String,
  email: String,
});
ContractPersonSchema.set("timestamps", true);

var SupplierSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  localName: { type: String, required: true },
  description: String,
  address: { type: String, required: true },
  localAddress: { type: String, required: true },
  taxId: { type: String, required: true },
  contractPersons: [ContractPersonSchema],
  phoneNumber: String,
  mobileNumber: String,
  fax: String,
  email: String,
  password: String,
});

SupplierSchema.plugin(plugin);
SupplierSchema.plugin(uniqueValidator);
SupplierSchema.set("timestamps", true);

module.exports =
  mongoose.models.Supplier || mongoose.model("Supplier", SupplierSchema);
