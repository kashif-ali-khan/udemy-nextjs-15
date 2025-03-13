"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
