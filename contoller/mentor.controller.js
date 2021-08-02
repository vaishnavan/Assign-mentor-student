const Mentor = require("../model/mentor.model");

const mentorController = {
    createMentor : async (req, res) => {
        try {
            const mentor = new Mentor(req.body);
            await mentor.save();
            
            res.status(200).json({success:true, data: mentor });
            
        } catch (error) {
            res.status(200).json(error);
        }
    },
    getMentor: async (req, res) => {
        try{
            const mymentorData = await Mentor.find().populate({path:'studentAssigned'});
            res.status(200).json({success: true, data:mymentorData});
        }
        catch(err){
            res.status(400).json({success: false, message:err.message});
        }

    }
}

module.exports = {mentorController};