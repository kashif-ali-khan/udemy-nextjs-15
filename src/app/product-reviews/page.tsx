import React, { Suspense } from "react";
import Products from "@/components/product";
import ProductReview from "@/components/reviews";

export default function ProductReviewsPage() {
  return (
    <div>
      <p>Products review component</p>
      <Suspense fallback={<div>Loading products...</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <ProductReview />
      </Suspense>
    </div>
  );
}pe
