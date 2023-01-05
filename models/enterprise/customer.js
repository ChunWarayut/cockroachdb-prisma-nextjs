 const mongoose = require("mongoose");
 const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("models/plugin");
 const Schema = mongoose.Schema;
 const ContractPersonSchema = new Schema({
  name: String,
  phoneNumber: String,
  mobileNumber: String,
  fax: String,
  email: String,
});
ContractPersonSchema.set("timestamps", true);

 const CustomerSchema = new Schema({
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
});

CustomerSchema.plugin(plugin);
CustomerSchema.plugin(uniqueValidator);
CustomerSchema.set("timestamps", true);

module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
