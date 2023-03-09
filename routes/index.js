const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

//homepage of our app
router.get("/", homeController.home);
//route for creating a task
router.post("/create-task", homeController.createTask);
//route for deleting  task
router.post("/delete-tasks", homeController.deleteTasks);

module.exports = router;
