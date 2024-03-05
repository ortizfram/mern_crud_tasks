const Task = require("../models/task.model.js");

const taskCreate = async (req, res, next) => {
  const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};
const tasks = async (req, res, next) => {
  const tasks = await Task.find();// {user:req.body.currentUser} for only auth user created tasks
  res.json(tasks);
};
const task = async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
const taskDelete = async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "task not found" });
  return res.status(204).json("deleted");
};
const taskUpdate = async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "task not found" });
  return res.status(200).json(task)
};

module.exports = { task, tasks, taskCreate, taskUpdate, taskDelete };
