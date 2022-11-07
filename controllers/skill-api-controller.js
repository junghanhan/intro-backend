import mongoose from "mongoose";

// get the reference of the mongoose model for "skills" collection
const skillModel = mongoose.model("skill");

const getAllSkills = async (req, res) => {
  try {
    let skills = await skillModel.find({}, "", {sort: {_id: 1}}).exec();
    res.status(200).json(skills);
  } catch(err) {
    res.status(400).send("Bad Request");
  }
};

export { getAllSkills };