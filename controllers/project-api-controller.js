import mongoose from 'mongoose';

// get the reference of the mongoose model for 'projects' collection
const projectModel = mongoose.model('project');

const getAllProjects = async (req, res) => {
  try {
    let projects = await projectModel.find({}, '', {sort: {_id: 1}}).exec();
    res.status(200).json(projects);
  } catch(err) {
    res.status(400).send("Bad Request");
  }
};

export { getAllProjects };