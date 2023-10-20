const createError = require("http-errors");
const Todo = require("../models/todo");

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch {
    return next(createError(500, "Something went wrong, the DB is down."));
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return next(createError(404, "Todo does not exist"));
    }
    res.send(todo);
  } catch (err) {
    return next(createError());
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });
    await newTodo.save();
    res.send(newTodo);
  } catch (err) {
    return next(createError(500, "Something went wrong"));
  }
};

exports.deleteTodos = async (req, res, next) => {
  try {
    const todos = await Todo.deleteMany();
    res.send(todos);
  } catch (err) {
    return next(createError(500, "Something went wrong"));
  }
};

exports.deleteTodoByID = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.delete(todo);
  } catch (err) {
    return next(createError(500, "Something went wrong"));
  }
};
