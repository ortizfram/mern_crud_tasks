const taskCreate = (req, res, next) => {
  res.send("task create");
};
const taskUpdate = (req, res, next) => {
  res.send("task update");
};
const taskDelete = (req, res, next) => {
  res.send("task delete");
};
const tasks = (req, res, next) => {
  res.send("tasks");
};
const task = (req, res, next) => {
  res.send("task");
};

module.exports = {task, tasks, taskCreate, taskUpdate, taskDelete}
