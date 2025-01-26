const express = require("express");
const router = express.Router();

const {
  getCourses,
  getCourseById, 
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../../../controllers/courses");

// Get all courses
router.get("/", getCourses);

// Get a course by ID
router.get("/:id", getCourseById);

// Create a new course
router.post("/", createCourse);

// Update a course by ID
router.put("/:id", updateCourse);

// Delete a course by ID
router.delete("/:id", deleteCourse);

module.exports = router;
