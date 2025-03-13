"use server";

import { updateProduct, deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function EditProducts(
  id: number,
  prevState: FormState,
  formData: FormData
) {
    console.log(formData,"formData")
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    console.log(errors,"ERRR")
    return { errors };
  }

  await updateProduct(id, title, parseInt(price), description);

  redirect("/products-db");
}


export async function deleteProductFromDB(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await deleteProduct(id)
  revalidatePath("/products-db");
}   