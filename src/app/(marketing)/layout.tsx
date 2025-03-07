import React from "react";
import "@/app/globals.css";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Home from Next",
    // absolute: "Home",
    template: "%s | Kashif nextjs",
  },
};
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 text-white p-10">Header</header>
        {children}

        <footer className="bg-gray-500 text-white p-10">Footer section</footer>
      </body>
    </html>
  );
};

export default MarketingLayout;
