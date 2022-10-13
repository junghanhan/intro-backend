import nodeMailer from 'nodemailer';
import mongoose from 'mongoose';

const contactSchema = mongoose.model("contact");

const sendEmail = async (req, res) => {
  try {
    // store the contact in DB
    // if the received contact is not validated by the schema, 
    // it will throw an exception, and thus not storing the contact
    // as well as not sending an email.
    let {firstName, lastName, email, message, sendCopy} = await contactSchema.create(req.body);
    
    const mailData = {
      from: email,
      to: process.env.EMAIL,
      subject: `Received message from ${firstName + " " + lastName}, email:${email}.`,
      text: `Received message from ${firstName + " " + lastName}, email:${email}\n\n${message}`
    };

    const transporter = nodeMailer.createTransport({
      port: 465,
      host: process.env.HOST,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      secure: true
    });

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        throw error;
      }
      console.log("Mail sent");
      console.log(info);
      res.status(200).send("Mail sent");
    });
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

export { sendEmail };