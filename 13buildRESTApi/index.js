const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


app.listen(PORT, () => console.log(`Server Started at`))