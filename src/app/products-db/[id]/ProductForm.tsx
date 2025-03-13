'use client';
import { useActionState, useState } from "react";
import { Product } from "../page";
import SubmitButton from "@/components/SubmitButton";
import { EditProducts, FormState } from "@/actions/Product";

const initialState: FormState = {
  errors: {},
};
export default function ProductEditForm({ product }: { product: Product }) {
  const editProductWithId = EditProducts.bind(null, product?.id || 0);
  const [state, formAction ] = useActionState(
    editProductWithId,
    initialState
  );

  const [title, setTitle] = useState(product?.title);
  const [price, setPrice] = useState(product?.price ?? 0);
  const [description, setDescription] = useState(product?.description);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>

      <form action={formAction} className="space-y-4">
        {/* Product Title */}
        <div>
          <label className="block text-gray-700 font-medium">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter product title"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            placeholder="Enter price"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            rows={4}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description ?? ""}
            placeholder="Enter product description"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
        </div>

        {/* Submit Button */}
        <SubmitButton />
      </form>
    </div>
  );
}
