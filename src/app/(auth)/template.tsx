"use client";
import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname();
    const [search, setSearch] = React.useState("");
  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/forgot-password", label: "Forgot Password" },
  ];

  return (
    <html>
      <body>
        <ul className="flex w-full space-x-4 text-white bg-blue-500 p-2 rounded-lg">
          {navLinks.map((navLink) => (
            <li
              className={` ${path === navLink.href ? "font-bold bg-gray-500 " : ""}cursor-pointer w-auto px-4 py-2 mb-2 bg-blue-700 rounded-md hover:bg-blue-400`}
              key={navLink.href}
            >
              <Link href={`${navLink.href}`} replace>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
            <input value={search} type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </div>
        {children}

        <footer className="bg-cyan-500 text-white p-5">Auth footer</footer>
      </body>
    </html>
  );
};

export default AuthLayout;
