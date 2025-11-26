import React from "react";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Rajkumar", email: "raj@gmail.com" },
    { id: 2, name: "Surapana", email: "surapana@example.com" },
  ];

  return (
    <div>
      <h2>Users (admin)</h2>
      <p>Manage users here.</p>

      {users.map((u) => (
        <div key={u.id} style={{ marginBottom: 20 }}>
          <p>
            <strong>Name:</strong> {u.name}
          </p>
          <p>
            <strong>Email:</strong> {u.email}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
