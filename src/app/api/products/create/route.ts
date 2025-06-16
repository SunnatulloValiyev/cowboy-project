import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Product from "@/models/Product"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const price = Number(formData.get("price"))
    const description = formData.get("description") as string
    const image = formData.get("image") as File

    const buffer = Buffer.from(await image.arrayBuffer())
    const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`

    await connectDB()
    const product = await Product.create({
      name,
      price,
      description,
      image: base64Image,
    })

    return NextResponse.json({ success: true, product })
  } catch (error: unknown) {
    const err = error as Error
    return NextResponse.json(
      { success: false, message: err.message || "Server xatosi" },
      { status: 500 }
    )
  }
}
