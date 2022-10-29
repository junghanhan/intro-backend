import express from "express";
import { getAllEducations } from "../controllers/education-api-controller.js";
import { getAllSkills } from "../controllers/skill-api-controller.js";
import { getAllProjects } from "../controllers/project-api-controller.js";
import { handleReceivedContact } from "../controllers/contact-api-controller.js"
import passport from "passport";

const router = express.Router();

// note that jwt authentication is done by front-end server rendering the page. not by client browser.
router
  .route("/educations")
  .get(passport.authenticate("jwt", { session: false }), getAllEducations);  

router
  .route("/skills")
  .get(passport.authenticate("jwt", { session: false }), getAllSkills);    

router
  .route("/projects")
  .get(passport.authenticate("jwt", { session: false }), getAllProjects);      

router
  .route("/contact")
  .post(handleReceivedContact);


export default router;
