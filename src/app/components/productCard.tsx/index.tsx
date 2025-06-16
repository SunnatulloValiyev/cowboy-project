// components/productCard.tsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Trash } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductCard({
  product,
  // onDelete,
}: {
  product: Product;
  // onDelete: (id: string) => void;
}) {
  return (
    <Card className="shadow-md rounded-xl p-4 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="grid gap-y-1.5">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-semibold mt-2">
            {product.price} so&apos;m
          </p>
          {/* <Button
            title="Delete"
            variant="destructive"
            onClick={() => onDelete(product._id)}
          >
            <Trash />
          </Button> */}
        </div>
      </div>
    </Card>
  );
}
