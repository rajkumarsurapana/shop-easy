import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>ShopEasy — Best deals everyday</h1>
          <p>
            Simple demo app showing routing, protected pages, admin nesting.
          </p>
          <p style={{ marginTop: 12 }}>
            <Link className="btn" to="/products">
              View Products
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
