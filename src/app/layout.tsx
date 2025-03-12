import React from "react";
import "@/app/globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: {
    default: "Home from Next",
    // absolute: "Home",
    template: "%s | Kashif nextjs",
  },
};
const NormalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
};

export default NormalLayout;
