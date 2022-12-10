const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
    },
    parent: [Object],
    categories: [Object],
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Category", categorySchema);
f;
