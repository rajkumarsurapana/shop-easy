import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

// USER FIXED PRODUCTS LIST + ADDED 104 (Shoes)
const PRODUCTS = {
  101: {
    title: "Apple iPhone 14",
    price: 79999,
    desc: "Latest model",
    img: "/images/iphone14.jpg",
  },
  102: {
    title: "Samsung S23",
    price: 69999,
    desc: "Flagship phone",
    img: "/images/s23.jpg",
  },
  103: {
    title: "Sony Headphones",
    price: 4999,
    desc: "High quality audio",
    img: "/images/headphones.jpg",
  },
  104: {
    title: "Nike Shoes",
    price: 4999,
    desc: "Comfortable running shoes",
    img: "/images/shoes.jpg",
  },
};

export default function ProductDetails() {
  const { id } = useParams();

  // ✔ Get admin-added products from Dashboard.jsx
  const outlet = useOutletContext();
  const adminProducts = outlet?.adminProducts || [];

  // ✔ 1) Check fixed product list
  const fixedProduct = PRODUCTS[id];

  // ✔ 2) Check admin-added products
  const adminProduct = adminProducts.find((p) => p.id == id);

  // ✔ Final: product from either list
  const product = fixedProduct || adminProduct;

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>

      <img
        src={product.img}
        alt={product.title}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          display: "block",
          margin: "20px 0",
        }}
      />

      <p style={{ fontSize: "18px" }}>{product.desc}</p>
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>₹ {product.price}</p>
    </div>
  );
}
