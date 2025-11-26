import React from "react";

export default function AdminOrders() {
  const orders = [
    { id: 1, user: "Raj", product: "iPhone 14", status: "Delivered" },
    { id: 2, user: "Kumar", product: "Sony Headphones", status: "Pending" },
  ];

  return (
    <div>
      <h2>Orders (admin)</h2>
      <p>Manage customer orders here.</p>

      {orders.map((o) => (
        <div key={o.id} style={{ marginBottom: 20 }}>
          <p>
            <strong>Order ID:</strong> {o.id}
          </p>
          <p>
            <strong>User:</strong> {o.user}
          </p>
          <p>
            <strong>Product:</strong> {o.product}
          </p>
          <p>
            <strong>Status:</strong> {o.status}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
