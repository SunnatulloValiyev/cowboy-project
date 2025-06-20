import { Schema, Document, models, model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image: string; 
}

const ProductSchema: Schema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String, required: true },
  },
  {
    timestamps: false,
    versionKey: false, 
  },
);


export default models.Product || model<IProduct>("Product", ProductSchema);
