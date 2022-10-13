import express from "express";
import { getAllSkills } from "../controllers/skill-api-controller.js";
import { getAllProjects } from "../controllers/project-api-controller.js";
import { handleReceivedContact } from "../controllers/contact-api-controller.js"

const router = express.Router();

router
  .route("/skills")
  .get(getAllSkills);  

router
  .route("/projects")
  .get(getAllProjects);

router
  .route("/contact")
  .post(handleReceivedContact);


export default router;
