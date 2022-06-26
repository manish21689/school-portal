var student = require('../controllers/students');
const teacherAuth = require("../middleware/teacherAuth")
const studentAuth= require('../middleware/studentAuth')
var express = require('express');
var router = express.Router();
router.get('/', studentAuth.checkStudent,student.getStudents);
router.post('/', student.addStudent);
router.get('/:id', teacherAuth.checkTeacher,student.updateStudentById);
router.put('/:id', student.updateStudentById);
router.delete('/:id', teacherAuth.checkTeacher,student.deleteStudentById);
router.get('/teacher/:id', student.getStudentsByTeacherId);
router.get('/class/:id', student.getStudentsByClassId);
router.get('/count/:id', student.getStudentsCountTeacherId);

module.exports = router;
