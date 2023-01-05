var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var plugin = require("models/plugin");
var Schema = mongoose.Schema;

const ProjectSupplierSchema = new Schema({
  supplierId: { type: Schema.ObjectId, ref: "Supplier" },
});
ProjectSupplierSchema.set("timestamps", true);

const DocumentItemSchema = new Schema({
  itemId: { type: Schema.ObjectId, ref: "Item" },
  unitPrice: { type: Number },
  quntity: { type: Number },
  discount: { type: Number },
  amount: { type: Number },
});
DocumentItemSchema.set("timestamps", true);

const DocumentSchema = new Schema({
  documentNo: { type: String, required: true, index: true, unique: true },
  documentDate: { type: Date, required: true },
  customerId: { type: Schema.ObjectId, ref: "Customer", required: true },
  supplierId: { type: Schema.ObjectId, ref: "Supplier", required: true },
  documentItems: [DocumentItemSchema],
  netAmount: { type: Number, required: true },
  status: { type: Schema.ObjectId, ref: "ReferenceValue", required: true },
  cancelledDate: Date,
  cancelledBy: { type: Schema.ObjectId, ref: "User" },
});

DocumentSchema.plugin(uniqueValidator);
DocumentSchema.set("timestamps", true);



var ProjectSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  projectDetails: { type: String, required: true },
  customerId: {
    type: Schema.ObjectId,
    ref: "Customer",
    index: true,
    required: true,
  },
  projectSuppliers: [ProjectSupplierSchema],
  supplierQuotations: [DocumentSchema],
  quotation: DocumentSchema,
  purchaseOrder: DocumentSchema,
  invoice: DocumentSchema,
  receipt: DocumentSchema,
  startDate: Date,
  endDate: Date,
  status: { type: Schema.ObjectId, ref: "ReferenceValue", required: true },
});

ProjectSchema.plugin(plugin);
ProjectSchema.plugin(uniqueValidator);
ProjectSchema.set("timestamps", true);

module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
