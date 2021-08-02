const router = require("express").Router();
const {studentController} = require("../contoller/student.controller");

router.post("/createStudent", studentController.createStudent);

module.exports = router;