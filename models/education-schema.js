import mongoose from "mongoose";

// init schema
// TODO: should implement POST endpoint for adding and updating data by using this schema
// TODO: URLs should use regular expression to check if it is a valid URL address.
const educationSchema = new mongoose.Schema({  
  schoolName: {
    type: String,
    required: true,
    trim: true    
  },
  startYear: {
    type: Number,
    required: true,
    min: 0,
    max: 2100
  },
  endYear: {
    type: Number,
    required: true,    
    min: 0,
    max: 2100,
    validate: {
      validator: function(val) {
        return val >= this.startYear;
      },
      message: props => `end year:${props.value} should be later than start year:${this.startYear}`
    }
  },
  qualification: {
    type: String,
    required: true,
    trim: true  
  },
  desc: {
    type: String,
    required: true,
    trim: true  
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true    
  }
});

// schema options
// toJSON : when a document is serialized (converted to JSON) from the database
// versionKey : whether __v (version) property will be included in the serialized JSON from the database
// virtuals : _id to id
// transform : delete _id of the returned mongoDB document 
educationSchema.set("toJSON", {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; }
});

// Mongoose automatically looks for the plural, lowercased version of the model name.
// In this case, "educations" collection in mongodb.
export default mongoose.model("education", educationSchema);