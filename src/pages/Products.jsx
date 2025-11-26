import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 101, title: "iPhone 14", price: 79999, img: "/images/iphone14.jpg" },
  { id: 102, title: "Samsung S23", price: 69999, img: "/images/s23.jpg" },
  {
    id: 103,
    title: "Sony Headphones",
    price: 4999,
    img: "/images/headphones.jpg",
  },
  { id: 104, title: "Nike Shoes", price: 4999, img: "/images/shoes.jpg" },
];

export default function Products() {
  return (
    <div>
      <h2>Products</h2>

      <div className="grid">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="card"
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              margin: "10px",
              width: "300px",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
                margin: "auto",
              }}
            />

            <h3>{p.title}</h3>
            <p>₹ {p.price}</p>

            <Link className="btn" to={`/product/${p.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
