const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    `;
  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //TODO : edit the user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //TODO : delete the user with id
    res.json({ status: "Pending" });
  });

// app.post("/api/users", (req, res) => {
//     // TOOD: Create new user
//     return res.json({ status: "pending"})
// });

// app.patch("/api/users/:id", (req, res) => {
//     // TOOD: Edit the user with id
//     return res.json({ status: "pending"})
// });

// app.delete("/api/users/:id", (req, res) => {
//     // TOOD: Delete the user with id
//     return res.json({ status: "pending"})
// });

app.listen(PORT, () => console.log(`Server Started at`));
