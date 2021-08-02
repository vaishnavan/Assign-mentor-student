const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    mentorName:{
        type:String,
    },
    studentAssigned:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Student',
    }]
},
    {timestamps: true}
)

module.exports = mongoose.model("Mentor", mentorSchema);