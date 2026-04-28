import { type Product } from "../types/product";
import { Button } from "./Button";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-end bg-cover bg-center rounded-2xl bg-white p-4 shadow-md hover:shadow-lg transition-shadow border border-[#dbe6e0] border-border`}
    >
      <img
        src={product.image}
        alt={product.titre}
        className="w-full h-90 mb-4 rounded-2xl object-cover"
      />
      <p className="text-lg font-bold">{product.titre}</p>
      <p className="text-md text-gray-400">{product.category}</p>
      <div className="flex items-center justify-center gap-2">
        <p className="text-gray-600">{product.price}</p>
        <p className=" line-through text-gray-500">{product.discount} CFA</p>
      </div>
      <Button variant="primary" className="">
        Ajouter au panier
      </Button>
    </div>
  );
}
