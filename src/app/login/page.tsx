"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "cowboy700" && password === "12345678") {
      document.cookie = "logged_in=true; path=/";
      router.push("/admin"); 
    } else {
      alert("Login yoki parol noto‘g‘ri");
    }
  };

  return (



    
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tizimga kirish</h1>
      <input
        type="text"
        placeholder="Login"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        Kirish
      </button>
    </main>
  );
}
