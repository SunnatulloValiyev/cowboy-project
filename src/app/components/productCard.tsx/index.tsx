import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Card className="shadow-md rounded-xl overflow-hidden p-4 w-full max-w-sm">
      <div className="w-full h-[160px] overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid gap-y-1.5 mb-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-green-600 font-semibold text-base">
          {product.price.toLocaleString()} so&apos;m
        </p>
        <Button variant="default">Sotib olish</Button>
      </div>
    </Card>
  );
}
