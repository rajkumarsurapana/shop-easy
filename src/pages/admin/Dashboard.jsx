import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [adminProducts, setAdminProducts] = useState([
    { id: 101, title: "iPhone 14", price: 79999, img: "/images/iphone14.jpg" },
    { id: 102, title: "Samsung S23", price: 69999, img: "/images/s23.jpg" },
  ]);

  // ADD PRODUCT
  const addProduct = (newProduct) => {
    setAdminProducts([...adminProducts, newProduct]);
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setAdminProducts(adminProducts.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="admin-links">
        <Link to="products">Products</Link>
        <Link to="orders">Orders</Link>
        <Link to="users">Users</Link>
        <Link to="add-product">Add Product</Link>
      </div>

      {/* PASS CONTEXT TO ALL ADMIN PAGES */}
      <Outlet context={{ adminProducts, addProduct, deleteProduct }} />
    </div>
  );
}
