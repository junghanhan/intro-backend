import express from "express";
import { getAllSkills } from "../controllers/skill-api-controller.js";

const router = express.Router();

router
  .route("/skills")
  .get(getAllSkills);  


export default router;
