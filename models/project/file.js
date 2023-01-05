const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const plugin = require("models/plugin");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
 code: { type: String, required: true, index: true, unique: true },
 name: { type: String, required: true},
 FileType: { type: Schema.ObjectId, ref: "ReferenceValue", required: true },
 File: { type: String, required: true },
 comment: { type: String },
});

FileSchema.plugin(plugin);
FileSchema.plugin(uniqueValidator);
FileSchema.set("timestamps", true);

module.exports =
 mongoose.models.File || mongoose.model("File", FileSchema);
