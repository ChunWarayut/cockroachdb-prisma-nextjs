var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var plugin = require("models/plugin");
var Schema = mongoose.Schema;

var ItemSpecSchema = new Schema({
  code: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true},
  photo: { type: String, required: true },
  comment: { type: String },
});

ItemSpecSchema.plugin(plugin);
ItemSpecSchema.plugin(uniqueValidator);
ItemSpecSchema.set("timestamps", true);

module.exports =
  mongoose.models.ItemSpec || mongoose.model("ItemSpec", ItemSpecSchema);
