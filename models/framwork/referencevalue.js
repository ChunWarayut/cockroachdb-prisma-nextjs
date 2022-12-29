const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("../plugin");

const Schema = mongoose.Schema;

const ReferenceValueSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  localName: { type: String, required: true },
  parentRefId: {
    type: Schema.ObjectId,
    ref: "ReferenceValue",
  },
  domainCode: { type: String, required: true },
  displayOrder: Number,
});


ReferenceValueSchema.plugin(plugin);
ReferenceValueSchema.plugin(uniqueValidator);
ReferenceValueSchema.set("timestamps", true);

module.exports =
  mongoose.models.ReferenceValue ||
  mongoose.model("ReferenceValue", ReferenceValueSchema);
