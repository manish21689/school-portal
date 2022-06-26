var teacher = require('../controllers/teachers');
var express = require('express');
var router = express.Router();
router.get('/', teacher.getTeachers);
router.post('/', teacher.addTeacher);
router.get('/:id', teacher.getTeacherById);
router.put('/:id', teacher.updateTeacherById);
router.delete('/:id', teacher.deleteTeacherById);
router.get('/studentscount/:id',teacher.getStudentsCount);
router.delete('/student/:id',teacher.delStudentsByTeacherId);
module.exports = router;


