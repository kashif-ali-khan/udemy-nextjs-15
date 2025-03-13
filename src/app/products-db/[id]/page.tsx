import { getProduct } from "@/prisma-db";
import ProductEditForm from "@/app/products-db/[id]/ProductForm";
import { Product } from "../page";
export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product = await getProduct(parseInt(id, 10));
  if (!product) {
    return <div>Product not found</div>;
  }
  return <ProductEditForm product={product} />;
}
