// import the necessary modules
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = exports = function auditinfo(schema, options) {
  schema.add({
    createdBy: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    modifiedBy: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: { type: Boolean, required: true, default: true },
    orgsnisationId: { type: Schema.ObjectId, ref: "Organisation" },
  });
};
