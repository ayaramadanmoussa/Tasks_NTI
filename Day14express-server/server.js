const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

let users = [
  { id: 1, name: "Aya", age: 20 },
  { id: 2, name: "Ahmed", age: 22 },
];

// GET ALL USERS
app.get("/users", (req, res) => {
  res.json(users);
});

// GET USER BY ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST
app.post("/users", (req, res) => {
  users.push(req.body);

  res.status(201).json({
    message: "User added",
    users,
  });
});

// PUT
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...req.body };

  res.json({
    message: "User updated",
    users,
  });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({
    message: "User deleted",
    users,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});