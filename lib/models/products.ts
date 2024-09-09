import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tags: [{ type: String, required: true }],
  media: [{ type: String, required: true }],
  category: { type: String, required: true },

  price: {
    type: mongoose.Schema.Types.Decimal128,
    get: (v: mongoose.Schema.Types.Decimal128) => {
      return parseFloat(v.toString());
    },
    required: true,
  },
  pay: {
    type: mongoose.Schema.Types.Decimal128,
    get: (v: mongoose.Schema.Types.Decimal128) => {
      return parseFloat(v.toString());
    },
    required: true,
  },
  discription: { type: String, required: true },
  sizes: [{ type: String, required: true }],
  colors: [{ type: String, required: true }],
  brand: { type: String, required: true },
  collections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Collection" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
