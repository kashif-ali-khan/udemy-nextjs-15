"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error, reset:any }) {

    const router = useRouter();
    const retry = () => {
        startTransition(() => {
            router.refresh();
            reset();

        });
    }

       

  return (
    <div className="container flex flex-col justify-center m-auto w-[200] h-[400]">
      <p> {error.message}</p>
      <p>
        <button onClick={()=> retry()} className="cursor-pointer block bg-green-700 text-white rounded-md px-4 py-2 hover:bg-green-500">
          Retry
        </button>
      </p>
    </div>
  );
}

