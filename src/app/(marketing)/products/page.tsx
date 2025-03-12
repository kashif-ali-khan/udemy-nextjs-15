import Link from "next/link";

const ProductsPage = () => {
  const products = [1, 2, 3, 4];
  return (
    <>
      <h3>Products Page <Link href="/">Home</Link></h3>
      <ul className="flex flex-col w-auto space-x-4 text-white bg-blue-500 p-2 rounded-lg">
        {products.map((product) => (
          <li className=" cursor-pointer w-100 px-4 py-2 mb-2 bg-blue-700 rounded-md hover:bg-blue-400" key={product}>
            <Link href={`/products/${product}`}>Product {product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
