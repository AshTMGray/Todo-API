const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodos,
  deleteTodoByID,
} = require("../controllers/todos");

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/create", addTodo);
router.delete("/delete", deleteTodos);
router.delete("/delete/:id", deleteTodoByID);
module.exports = router;
