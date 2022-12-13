const mongoose = require("mongoose");
const { Schema } = mongoose;

const variationSchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  price: {
    won: {
      type: Number,
      required: false,
    },
  },
  thumbnail: {
    url: {
      type: String,
      required: false,
    },
  },
});

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      length: 30,
    },
    mainThumbnail: {
      url: {
        type: String,
        required: false,
      },
    },
    ingredients: {
      main: {
        type: Array,
        required: false,
      },
      all: {
        type: Array,
        required: false,
      },
    },
    skinType: {
      type: Array,
      required: false,
    },
    recommendFor: {
      type: Array,
      required: false,
    },
    texture: {
      type: Array,
      required: false,
    },
    summary: {
      type: String,
    },
    description: {
      type: String,
    },
    variations: {
      type: variationSchema,
      required: false,
    },
    recomendedItems: [
      {
        type: Object,
        required: false,
      },
    ],
    available: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
