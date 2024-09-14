const db = require('../models').Student;

const getAllStudents = async (req, res) => {
    await db.findAll().then(students => {
        if (students.length > 0) {
            res.status(200).json(students);
        } else {
            res.status(404).json("No Students found");
        }
    }).catch(err => {
        res.status(500).json("Error: " + err.message)
    })
}

const getByStudentId = async (req, res) => {
    await db.findOne({ where: { id: req.params.id } })
        .then(student => {
            if (student != null) {
                res.status(200).json(student);
            } else {
                res.status(404).json("No Student found");
            }
        }).catch(err => {
            res.status(500).json("Error: " + err.message)
        })
}

const addStudent = async (req, res) => {
    await db.findOne({ where: { name: req.body.name } })
        .then(student => {
            if (student != null) {
                res.status(400).json("Student already exists")
            } else {
                db.create(req.body).then(_ => {
                    res.status(201).json("Student created successfully")
                })
            }
        }).catch(err => {
            res.status(500).json("Error: " + err.message)
        })
}

const editStudent = async (req, res) => {
    await db.findOne({ where: { id: req.params.id } })
        .then(student => {
            if (student != null) {
                db.update(req.body, { where: { id: req.params.id } })
                    .then(_ => res.status(200).json("Student updated successfully"))
            } else {
                res.status(404).json("Student not found")
            }
        }).catch(err => {
            res.status(500).json("Error: " + err.message)
        })
}

const deleteStudent = async (req, res) => {
    await db.findOne({ where: { id: req.params.id } })
        .then(student => {
            if (student != null) {
                db.destroy({ where: { id: req.params.id } })
                    .then(_ => res.status(200).json("Student Delete Successfully"))
            } else {
                res.status(404).json("Student Not Found")
            }
        })
        .catch(err => {
            res.status(500).json("Error: " + err.message)
        })
}

module.exports = {
    getAllStudents,
    getByStudentId,
    addStudent,
    editStudent,
    deleteStudent
}