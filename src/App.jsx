// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

// User pages
import Login from "./pages/Login";
import UserProfile from "./pages/user/UserProfile";
import UserOrders from "./pages/user/UserOrders";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AddProduct from "./pages/admin/AddProduct";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [products, setProducts] = useState([
    { id: 101, title: "iPhone 14", price: 79999, img: "/images/iphone14.jpg" },
    { id: 102, title: "Samsung S23", price: 69999, img: "/images/s23.jpg" },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
          <Route path="/login" element={<Login />} />

          {/* User protected route */}
          <Route
            path="/user/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <Dashboard
                products={products}
                deleteProduct={deleteProduct}
                addProduct={addProduct}
              />
            }
          >
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
