import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/user/profile">Profile</Link>
            <a onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </a>
          </>
        )}
        <Link to="/admin/dashboard">Admin</Link>
      </div>
    </header>
  );
}
