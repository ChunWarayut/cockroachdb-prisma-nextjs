// import the necessary modules
 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

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
    organisationId: {
      type: Schema.ObjectId,
      ref: "Organisation",
      required: true,
    },
  });
};
