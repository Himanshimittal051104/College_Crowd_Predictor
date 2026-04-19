"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function Login() {
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      // API call to backend
      const res = await login({ role });

      console.log("Response:", res.data);

      // Redirect based on backend response
      if (res.data.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/prediction");
      }

    } catch (err) {
      console.error(err);
      alert("Login failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f46e5, #06b6d4)"
      }}
    >
      <div
        className="card"
        style={{
          width: "320px",
          textAlign: "center",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Smart Crowd System</h2>

        <select
          className="input"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button
          className="button"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}