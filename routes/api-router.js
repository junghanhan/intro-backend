import express from "express";
import { getAllSkills } from "../controllers/skill-api-controller.js";
import { getAllProjects } from "../controllers/project-api-controller.js";

const router = express.Router();

router
  .route("/skills")
  .get(getAllSkills);  

router
  .route("/projects")
  .get(getAllProjects);


export default router;
