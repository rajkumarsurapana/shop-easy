import React from "react";
import { useOutletContext } from "react-router-dom";

export default function AdminProducts() {
  const { adminProducts, deleteProduct } = useOutletContext();

  return (
    <div>
      <h2>Products (admin)</h2>

      {adminProducts.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
            width: "300px",
            borderRadius: "8px",
          }}
        >
          <img
            src={p.img}
            alt={p.title}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />

          <h3>{p.title}</h3>
          <p>₹ {p.price}</p>

          <button
            onClick={() => deleteProduct(p.id)}
            style={{
              background: "red",
              color: "white",
              padding: "5px 12px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
