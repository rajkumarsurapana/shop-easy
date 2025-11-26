import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function AddProduct() {
  const { addProduct } = useOutletContext();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      img,
    };

    addProduct(newProduct);
    alert("Product added!");
  }

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input value={img} onChange={(e) => setImg(e.target.value)} required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
