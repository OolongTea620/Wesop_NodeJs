const mongoose = require("mongoose");
const { Schema } = mongoose;

const testSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      length: 30,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Test", testSchema);
