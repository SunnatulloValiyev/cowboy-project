import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

// DELETE /api/products/[id]
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  try {
    await connectDB();

    const { id } = context.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: "Mahsulot topilmadi" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Mahsulot o‘chirildi" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Noma'lum xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
