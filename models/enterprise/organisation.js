var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  description: String,
});

OrganisationSchema.plugin(uniqueValidator);
OrganisationSchema.set("timestamps", true);

module.exports =
  mongoose.models.Organisation ||
  mongoose.model("Organisation", OrganisationSchema);
