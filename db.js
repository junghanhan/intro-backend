import mongoose from "mongoose";

// connect to locally running MongoDB instance
let dbURI = `${process.env.MONGODB_HOST}/intro_db`;

// connects to the DB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// defining event "connected" handler
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + dbURI);
});

// defining event "error" handler
// print error message to console
// if there is a problem connecting
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:" + err);
});

// defining event "disconnected" handler
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// create mongoose schema and model
import "./models/skill-schema.js";
import "./models/project-schema.js";
import "./models/contact-schema.js";
import "./models/education-schema.js";