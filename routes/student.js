const express = require('express');
const router = express.Router();

const studentController = require('../controller/StudentController')

router.get('/list', studentController.getAllStudents);

router.get('/getbyid/:id', studentController.getByStudentId);

router.post('/add', studentController.addStudent);

router.put('/edit/:id', studentController.editStudent);

router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;