'use client';
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};
export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await data.json();
        setUsers(users);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something gonr wrong");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          key={user.id}
          className="p-4 bg-cyan-200 shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
