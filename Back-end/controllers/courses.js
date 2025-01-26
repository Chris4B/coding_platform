const { Course } = require("../models")

exports.getCourses = async (req, res) => {
    try{
        const courses = await Course.findAll({
            include: [{ association: "chapters" }], 
          });
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({error: "Failed to fetch courses"})
    }
};

exports.getCourseById = async(req, res) =>{
    try {
        const course = await Course.findByPk(req.params.id, {
            include: [{ association: "chapters" }], 
        });
        if(!course) {
            return res.status(404).json({error: "Course not found"});
        }

        res.status(200).json(course);
    
    }catch (error){
        res.status(500).json({error: "failed to fetch course"})
    }
}; 

exports.createCourse = async(req, res) => {
    try{
        const course = await Course.create(req.body);
        res.status(201).json(course);
    }catch (error){
        res.status(400).json({error: "Failed to create course", details: error.message });
    }
};

exports.updateCourse = async(req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if(!course) {
            return res.status(404).json({error: " Course not found"})
        }
        await course.update(req.body);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: "Failed to update course" });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
      const course = await Course.findByPk(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      await course.destroy();
      res.status(204).send(); // Pas de contenu, succès
    } catch (error) {
      res.status(500).json({ error: "Failed to delete course", details: error.message });
    }
};