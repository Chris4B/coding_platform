
let lessons = [];

// Obtenir toutes les leçons
exports.getLessons = (req, res) => {
  res.json(lessons);
};

// Obtenir une leçon par ID
exports.getLessonsById = (req, res) => {
  const lesson = lessons.find((l) => l.id === parseInt(req.params.id));
  if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  res.json(lesson);
};

// Créer une nouvelle leçon
exports.createLesson = (req, res) => {
  const { title, description, code } = req.body;
  if (!title || !description || !code) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newLesson = {
    id: lessons.length + 1,
    title,
    description,
    code,
  };
  lessons.push(newLesson);
  res.status(201).json(newLesson);
};

// Mettre à jour une leçon
exports.updateLesson = (req, res) => {
  const { title, description, code } = req.body;
  const lesson = lessons.find((l) => l.id === parseInt(req.params.id));
  if (!lesson) return res.status(404).json({ message: "Lesson not found" });

  lesson.title = title || lesson.title;
  lesson.description = description || lesson.description;
  lesson.code = code || lesson.code;

  res.json(lesson);
};

// Supprimer une leçon
exports.deleteLesson = (req, res) => {
  lessons = lessons.filter((l) => l.id !== parseInt(req.params.id));
  res.status(204).send();
};
