const express = require("express");
const {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");

const upload = require("../middleware/upload");

const router = express.Router();

//GET All Courses
router.get("/", getCourses);

//GET a single course
router.get("/:id", getCourse);

//Post a new course
router.post("/", upload.single('image'), createCourse);

//Delete a course
router.delete("/:id", deleteCourse);

//Update a course
router.patch("/:id", upload.single('image'), updateCourse);

module.exports = router;
