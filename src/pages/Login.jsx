import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("token", "demo-token");
    localStorage.setItem("user", JSON.stringify({ name: "Raj Kumar", email }));
    navigate("/user/profile");
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <label>
          Email{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </label>
        <label>
          Password{" "}
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </label>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
