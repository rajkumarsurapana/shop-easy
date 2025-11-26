import React from "react";
export default function UserProfile() {
  const user = JSON.parse(
    localStorage.getItem("user") || '{"name":"Demo","email":"demo@example.com"}'
  );
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <a href="/user/orders">View Orders</a>
      </p>
    </div>
  );
}
