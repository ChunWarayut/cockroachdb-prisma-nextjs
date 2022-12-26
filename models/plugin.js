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
    isActive: {
      type: Schema.Boolean,
      required: true,
      index: true,
    },
    orgsnisationId: {
      type: Schema.ObjectId,
      ref: "Organisation",
      required: true,
      index: true,
    },
  });
};
