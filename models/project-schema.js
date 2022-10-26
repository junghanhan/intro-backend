import mongoose from "mongoose";

// init schema
// TODO: URLs should use regular expression to check if it is a valid URL address.
const projectSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true,
    trim: true    
  },
  summary: {
    type: String,
    required: true,
    trim: true    
  },
  desc: {
    type: String,
    required: true,
    trim: true    
  },
  imageUrls: {
    type: [String],
    required: true,
    trim: true    
  },
  linkUrl: {
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
projectSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; }
});

// Mongoose automatically looks for the plural, lowercased version of the model name.
// In this case, 'projects' collection in mongodb.
export default mongoose.model('project', projectSchema);