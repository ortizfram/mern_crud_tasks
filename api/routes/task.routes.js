const express = require("express");
const {
  taskCreate,
  task,
  tasks,
  taskUpdate,
  taskDelete,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/:id", task);
router.get("/", tasks);
router.post("/create", taskCreate);
router.put("/update/:id", taskUpdate);
router.delete("/delete/:id", taskDelete);

module.exports = router;
