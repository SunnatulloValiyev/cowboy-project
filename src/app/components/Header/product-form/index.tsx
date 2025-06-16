"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProductForm() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
    if (imageFile) {
      formData.append("image", imageFile)
    }

    const res = await fetch("/api/products/create", {
      method: "POST",
      body: formData,
    })

    const result = await res.json()
    if (result.success) {
      alert("Mahsulot muvaffaqiyatli qo‘shildi")
      setName("")
      setPrice("")
      setDescription("")
      setImageFile(null)
    } else {
      alert("Xatolik: " + result.message || "Yuklanmadi")
    }
  }

  return (
    <div className="shadow-xl rounded-3xl">
      <div className="p-6 bg-white rounded-2xl">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">Yangi Mahsulot</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product-name">Mahsulot nomi</Label>
              <Input
                id="product-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Narxi</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Rasm</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Tavsif</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Qo‘shish
          </Button>
        </form>
      </div>
    </div>
  )
}
