const express = require("express");
const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");

const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/learning");

//Middlewares- Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/use", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
