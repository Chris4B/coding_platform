const express = require("express");
const router = express.Router();
const {
  getLessons,
  getLessonsById,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../../../controllers/lessons");


router.get("/", getLessons);


router.get("/:id", getLessonsById);


router.post("/", createLesson);


router.put("/:id", updateLesson);


router.delete("/:id", deleteLesson);

module.exports = router;
