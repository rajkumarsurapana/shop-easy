import React from "react";
const ORDERS = [
  { id: 111, status: "Delivered", amount: 1999 },
  { id: 112, status: "Pending", amount: 999 },
  { id: 113, status: "Shipped", amount: 499 },
];

export default function UserOrders() {
  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {ORDERS.map((o) => (
          <li key={o.id}>
            Order #{o.id} - {o.status} - ₹{o.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
