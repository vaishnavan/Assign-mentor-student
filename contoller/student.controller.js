const Student = require("../model/student.model");
const Mentor = require("../model/mentor.model");

const studentController = {
    createStudent: async (req, res) => {
        try {
            const student = new Student(req.body);
            await student.save();

            const mentor = await Mentor.findById({_id: student.mentor})
            mentor.studentAssigned.push(student);
            await mentor.save();

            res.status(200).json({success:true, data: student })


        } catch (error) {
            res.status(400).json({success: false, message:error.message})
        }
    }
}

module.exports = {studentController};