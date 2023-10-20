require("dotenv").config();
const port = process.env.PORT || 3010;
const express = require("express");
const app = express();
app.use(express.json());
const todosRoutes = require("./routes/todos");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Not connected to MongoDB", err);
  });

app.use("/todos", todosRoutes);

app.get("/", () => {
  console.log("Hello world received a request.");
});

app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
