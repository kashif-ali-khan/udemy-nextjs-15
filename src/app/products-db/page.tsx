import { deleteProductFromDB } from "@/actions/Product";
import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
} | null;
export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product?.id}
          className="p-4 bg-cyan-200 shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">
            <Link className="hover:underline block" href={`/products-db/${product?.id}`}>{product?.title}</Link>
          </div>
          <div className="text-sm">
            <div>Price: {product?.price}</div>
            <div>Description: {product?.description}</div>
          </div>
          <form action={deleteProductFromDB.bind(null, product?.id ?? 0)}>
          <button className=" cursor-pointer px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md">Delete</button>
          </form>
        </li>
      ))}
    </ul>
  );
}
