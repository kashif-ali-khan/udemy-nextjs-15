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
export async function getServerSideProp