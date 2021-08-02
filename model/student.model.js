const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    mentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
        required:true,
    }
},
    {timestamps: true}
)

module.exports = mongoose.model("Student", studentSchema);