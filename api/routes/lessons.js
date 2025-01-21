const express = require('express');
const router = express.Router();
const {
    getLessons, 
    getLessonsById,
    createLesson,
    updateLesson,
    deleteteLesson,
} = require('../controllers/lessons');

// Get all the lessons
router.get('/',getLessons);

// Get one lesson By ID
router.get('/:id', getLessonsById);

// Create a new lesson
router.post('/', createLesson);

// update a lesson
router.put('/:id', updateLesson)

// Delete a lesson
router.delete('.:id', deleteteLesson)

module.exports = router;