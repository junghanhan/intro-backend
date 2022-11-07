import mongoose from "mongoose";

// get the reference of the mongoose model for "educations" collection
const educationModel = mongoose.model("education");

const getAllEducations = async (req, res) => {
  try {
    let educations = await educationModel.find({}, "", {sort: {endYear: -1}}).exec();
    res.status(200).json(educations);
  } catch(err) {
    res.status(400).send("Bad Request");
  }
};

export { getAllEducations };