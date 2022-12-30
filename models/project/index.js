var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var plugin = require("../plugin");
var Schema = mongoose.Schema;


const ProjectSupplier = new Schema({
    supplierId: { type: Schema.ObjectId, ref: "Supplier" }
  });
  ProjectSupplier.set("timestamps", true);

var ProjectSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  projectDetails: { type: String, required: true },
  customerId: { type: Schema.ObjectId, ref: "Customer", index: true ,required: true},
  projectSuppliers:[ProjectSupplier],
  startDate: Date,
  endDate: Date,
  status:{ type: Schema.ObjectId, ref: "ReferenceValue" ,required: true}

});

ProjectSchema.plugin(plugin);
ProjectSchema.plugin(uniqueValidator);
ProjectSchema.set("timestamps", true);

module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
