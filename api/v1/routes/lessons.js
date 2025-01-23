const express = require("express");
const router = express.Router();
const {
  getLessons,
  getLessonsById,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessons");

/**
 * @swagger
 * /api/v1/lessons:
 *   get:
 *     summary: Get all lessons
 *     tags:
 *       - Lessons
 *     responses:
 *       200:
 *         description: List of all lessons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The lesson ID
 *                   title:
 *                     type: string
 *                     description: Title of the lesson
 *                   description:
 *                     type: string
 *                     description: Description of the lesson
 */
router.get("/", getLessons);

/**
 * @swagger
 * /api/v1/lessons/{id}:
 *   get:
 *     summary: Get a lesson by ID
 *     tags:
 *       - Lessons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the lesson to retrieve
 *     responses:
 *       200:
 *         description: Details of a lesson
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Lesson not found
 */
router.get("/:id", getLessonsById);

/**
 * @swagger
 * /api/v1/lessons:
 *   post:
 *     summary: Create a new lesson
 *     tags:
 *       - Lessons
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the lesson
 *               description:
 *                 type: string
 *                 description: Description of the lesson
 *               code:
 *                 type: string
 *                 description: Code content for the lesson
 *     responses:
 *       201:
 *         description: Lesson created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", createLesson);

/**
 * @swagger
 * /api/v1/lessons/{id}:
 *   put:
 *     summary: Update a lesson
 *     tags:
 *       - Lessons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the lesson to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lesson updated successfully
 *       404:
 *         description: Lesson not found
 */
router.put("/:id", updateLesson);

/**
 * @swagger
 * /api/v1/lessons/{id}:
 *   delete:
 *     summary: Delete a lesson
 *     tags:
 *       - Lessons
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the lesson to delete
 *     responses:
 *       204:
 *         description: Lesson deleted successfully
 *       404:
 *         description: Lesson not found
 */
router.delete("/:id", deleteLesson);

module.exports = router;
