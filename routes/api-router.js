import express from "express";
import { getAllEducations } from "../controllers/education-api-controller.js";
import { getAllSkills } from "../controllers/skill-api-controller.js";
import { getAllProjects } from "../controllers/project-api-controller.js";
import { handleReceivedContact } from "../controllers/contact-api-controller.js"

const router = express.Router();

router
  .route("/educations")
  .get(getAllEducations);

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
