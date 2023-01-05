 const mongoose = require("mongoose");
 const uniqueValidator = require("mongoose-unique-validator");
 const plugin = require("models/plugin");
 const Schema = mongoose.Schema;


 const ItemSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  itemSpecId: { type: Schema.ObjectId, ref: "File"},
  orderCatId: { type: Schema.ObjectId, ref: "ReferenceValue", required: true },
  orderSubCatId: {
    type: Schema.ObjectId,
    ref: "ReferenceValue",
    required: true,
  },
});

ItemSchema.plugin(plugin);
ItemSchema.plugin(uniqueValidator);
ItemSchema.set("timestamps", true);

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
