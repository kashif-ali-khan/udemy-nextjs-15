import React from "react";

export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Products</div>;
}
