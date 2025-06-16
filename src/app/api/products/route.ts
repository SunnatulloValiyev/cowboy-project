import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product, { IProduct } from "@/models/Product";

// GET: Return all products
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

// POST: Create new product
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<IProduct>;

    await connectDB();
    const newProduct = await Product.create(body);
    return NextResponse.json({ success: true, product: newProduct });
  } catch (err: unknown) {
  if (err instanceof Error) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: false, error: "Unknown error occurred" },
    { status: 500 }
  );
}}
