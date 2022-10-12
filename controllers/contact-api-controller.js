import nodeMailer from 'nodemailer';

const sendEmail = (req, res) => {
  const { firstName, lastName, email, message, sendCopy } = req.body;
  // console.log(`${firstName}, ${lastName}, ${email}, ${message}, ${sendCopy}`);

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
    if(error) {
      return console.log(error);
    }
    res.status(200).send("Mail sent");
  });  
};

export { sendEmail };