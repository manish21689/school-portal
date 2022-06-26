const { Teacher } = require('../models/model-teachers');
const { Student } = require('../models/model-students');

const getTeachers = async (pages, limit) => {
    try {
        var doc = await Teacher.find({ isactive: true }).limit(limit).skip((pages - 1) * limit);
        return [doc, null]

    } catch (error) {
        return [null, error]
    }

}
const getTeacherById = async (id) => {
    try {
        var doc = await Teacher.findById(id)
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}


const updateTeacherById = async (id, obj) => {
    try {
        var doc = await Teacher.findByIdAndUpdate(id, obj, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const deleteTeacherById = async (id) => {
    try {
        var doc = await Teacher.findByIdAndUpdate(id, { isactive: false }, { new: true })
        return [doc, null]
    } catch (error) {
        return [null, error]
    }

}

const addTeacher = async (teacherFromController) => {
    try {
        const teacher = new Teacher({
            name: teacherFromController.name,
            subject: teacherFromController.subject,
            password: teacherFromController.password
        })
        const doc = await teacher.save();
        return [doc, null]
    } catch (error) {
        console.log(error)
        return [null, error]
    }
}

const getStudentsCount = async (id) => {
    try {
        const doc = await Student.find({ teacher_id: id }).countDocuments();

        // console.log(doc)
        return [doc, null]
    } catch (error) {
        return [null, error]
    }
}

const delStudentsByTeacherId = async (id) => {
    try {
        let doc = await Student.update({ teacher_id: id }, { "$set": { isactive: false } })
        const doc2 = await Teacher.findByIdAndUpdate(id, { isactive: false }, { new: true })
        return [{ doc, doc2 }, null]
    } catch (error) {
        return [null, error]
    }
}

module.exports = {
    getTeacherById, getTeachers, updateTeacherById,
    deleteTeacherById, addTeacher, getStudentsCount,
    delStudentsByTeacherId
}