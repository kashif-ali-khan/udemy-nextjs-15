# Next.js Project

## 🚀 Overview
This project is built using **Next.js**, a React framework that enables server-side rendering, static site generation, and API routes. Below are various Next.js concepts with examples and use cases.

---

## 📌 Table of Contents
- [Installation & Setup](#installation--setup)
- [Routing](#routing)
- [Server Components vs Client Components](#server-components-vs-client-components)
- [Data Fetching](#data-fetching)
- [API Routes](#api-routes)
- [Middleware](#middleware)
- [Authentication](#authentication)
- [Internationalization (i18n)](#internationalization-i18n)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)

---

## 🔧 Installation & Setup

### Install Dependencies
```sh
npx create-next-app@latest my-nextjs-app --typescript
cd my-nextjs-app
npm install
```

### Run Development Server
```sh
npm run dev
```

---

## 📂 Routing
Next.js uses **file-based routing**.

### **1. Basic Page Routing**
```tsx
// pages/about.tsx
export default function About() {
  return <h1>About Page</h1>;
}
```
Access at `/about`.

### **2. Dynamic Routing**
```tsx
// pages/blog/[id].tsx
import { useRouter } from 'next/router';
export default function BlogPost() {
  const router = useRouter();
  return <h1>Blog ID: {router.query.id}</h1>;
}
```
Access at `/blog/123`.

---

## 🆚 Server Components vs Client Components

### **1. Server Component (default)**
```tsx
// app/server-component.tsx
export default async function ServerComponent() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### **2. Client Component**
```tsx
// app/client-component.tsx
'use client';
import { useState } from 'react';
export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## 🔄 Data Fetching

### **1. Server-Side Rendering (SSR)**
```tsx
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}
export default function Page({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### **2. Static Site Generation (SSG)**
```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data }, revalidate: 10 };
}
```

---

## 📡 API Routes
Create serverless API endpoints inside `pages/api`.

```tsx
// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}
```
Access at `/api/hello`.

---

## 🔒 Middleware
Middleware runs before a request is completed.

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
export function middleware(req) {
  if (!req.cookies.auth) {
    return NextResponse.redirect('/login');
  }
  return NextResponse.next();
}
```

---

## 🔑 Authentication
Using **NextAuth.js** for authentication.

```tsx
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
export default NextAuth({
  providers: [Providers.GitHub({ clientId: '', clientSecret: '' })],
});
```

---

## 🌍 Internationalization (i18n)

Add to `next.config.js`:
```js
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};
```

---

## 🚀 Performance Optimization
- **Lazy Loading Components**
```tsx
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));
```

- **Optimized Images**
```tsx
import Image from 'next/image';
<Image src='/image.jpg' width={500} height={300} alt='Optimized Image' />;
```

---

## ☁️ Deployment
Deploy on **Vercel**:
```sh
vercel
```
Or on **Netlify, AWS, DigitalOcean** using `next build` and `next start`.

---

## 📜 Conclusion
This README provides an overview of Next.js with examples and best practices. For more details, visit the [Next.js Docs](https://nextjs.org/docs).

