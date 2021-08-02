const router = require("express").Router();
const {mentorController} = require("../contoller/mentor.controller");


router.post("/createMentor", mentorController.createMentor);
router.get("/getMentor", mentorController.getMentor);


module.exports = router;