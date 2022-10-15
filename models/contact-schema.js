import mongoose from "mongoose";


// init schema
const contactSchema = new mongoose.Schema({  
  firstName: {
    type: String,    
    trim: true,
    min: 2,
    max: 150,
    validate: /^[A-Za-z0-9-_]+$/,
    required: true 
  },
  lastName: {
    type: String,    
    trim: true,
    min: 2,
    max: 150,
    validate: /^[A-Za-z0-9-_]+$/,
    required: true 
  },
  email: {
    type: String,    
    trim: true,
    max: 320,
    validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true 
  },
  message: {
    type: String,
    max: 300,
    required: true    
  },
  sendCopy: {
    type: Boolean,
    required: true
  }  
}, {
  timestamps: true 
});

// schema options
// toJSON : when a document is serialized (converted to JSON) from the database
// versionKey : whether __v (version) property will be included in the serialized JSON from the database
// virtuals : _id to id
// transform : delete _id of the returned mongoDB document 
contactSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => { delete ret._id; }
});

// Mongoose automatically looks for the plural, lowercased version of the model name.
// In this case, 'contacts' collection in mongodb.
export default mongoose.model('contact', contactSchema);