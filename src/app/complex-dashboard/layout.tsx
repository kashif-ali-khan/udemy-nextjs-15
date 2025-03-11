import React from "react";
import "@/app/globals.css";
export default function ComplexDashboard({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="container ">
      <div>{children}</div>
      <div className="flex w-full h-auto gap-6 m-auto justify-center">
        <div className="flex flex-col gap-6">
            <div className="">{users}</div>
            <div className="">{revenue}</div>
        </div>
        <div className="flex flex-1 gap-6">{ notifications}</div>
      </div>
    </div>
  );
}
