const http = require("http");

let users = [
  { id: 1, name: "Aya", age: 20 },
  { id: 2, name: "Ahmed", age: 22 },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET ALL USERS
  if (req.method === "GET" && req.url === "/users") {
    return res.end(JSON.stringify(users));
  }

  // GET USER BY ID
  if (req.method === "GET" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);

    const user = users.find((u) => u.id === id);

    if (user) {
      return res.end(JSON.stringify(user));
    }

    res.statusCode = 404;
    return res.end(JSON.stringify({ message: "User not found" }));
  }

  // POST
  if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newUser = JSON.parse(body);

      users.push(newUser);

      res.statusCode = 201;
      res.end(JSON.stringify({
        message: "User added",
        users,
      }));
    });

    return;
  }

  // PUT
  if (req.method === "PUT" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updatedUser = JSON.parse(body);

      const index = users.findIndex((u) => u.id === id);

      if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "User not found" }));
      }

      users[index] = { ...users[index], ...updatedUser };

      res.end(JSON.stringify({
        message: "User updated",
        users,
      }));
    });

    return;
  }

  // DELETE
  if (req.method === "DELETE" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);

    users = users.filter((u) => u.id !== id);

    return res.end(JSON.stringify({
      message: "User deleted",
      users,
    }));
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});