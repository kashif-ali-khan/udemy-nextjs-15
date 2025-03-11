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
const NormalLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body>
        {children}

      </body>
    </html>
  );
};

export default NormalLayout;
