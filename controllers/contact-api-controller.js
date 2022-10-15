import nodeMailer from 'nodemailer';
import mongoose from 'mongoose';

const contactSchema = mongoose.model("contact");

const sendEmail = (sender, receiver, contact) => {
  const mailData = {
    from: sender,
    to: receiver,
    subject: `Received message from ${contact.firstName + " " + contact.lastName}, email:${contact.email}.`,
    text: `Received message from ${contact.firstName + " " + contact.lastName}, email:${contact.email}\n\n${contact.message}`
  };

  const transporter = nodeMailer.createTransport({
    port: 587,
    host: process.env.HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }    
  });

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      throw error;
    }
    console.log("Mail sent");
    console.log(info);        
  });
};

const handleReceivedContact = async (req, res) => {
  try {
    // store the contact in DB
    // if the received contact is not validated by the schema, 
    // it will throw an exception, and thus not storing the contact
    // as well as not sending an email.
    let contact = await contactSchema.create(req.body);    
    
    sendEmail(contact.email, process.env.EMAIL, contact);
    // send the copy of the email to the sender
    if(contact.sendCopy) {
      sendEmail(process.env.EMAIL, contact.email, contact);
    }

    res.status(200).send("Mail sent");
  }
  catch (err) {
    console.error(err);
    res
      .status(400)
      .send(
        "Bad Request. The message in the body of the \
        Request is either missing or malformed."
      );
  }
};

export { handleReceivedContact };