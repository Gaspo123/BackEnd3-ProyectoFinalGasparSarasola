import { model, Schema } from "mongoose";

const collection = "products";
const schema = new Schema(
  {
    name: { type: String, index: true, required: true },
    description: { type: String },
    stock: { type: Number, default: 1 },
    price: { type: Number, default: 1 },
    image: {
      type: String,
      default:
        "https://thangs.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-thangs-public%2Fuploads%2Fattachments%2F36fef19b-7bf9-4443-a88d-59e3696d9a9f%2FStitch_2.png&w=256&q=75",
    },
    category: {
      type: String,
      enum: ["", "computadoras", "perifericos", "celulares"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = model(collection, schema);
export default Product;
