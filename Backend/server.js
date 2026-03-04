import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to send email
app.post('/send-email', async (req, res) => {
  const { fullname, email, projectDetails } = req.body;

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'israeltomisin001@gmail.com',
    subject: `New Contact Form Submission from ${fullname}`,
    text: `Name: ${fullname}\nEmail: ${email}\nProject Details: ${projectDetails}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// app.post('/send-enroll-email', async (req, res) => {
//   const {ChildName, Age,gradeLevel,parentName, contact, Phone, what} = req.body;

//   // Setup transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: 'israeltomisin001@gmail.com',
//     subject: `Hi from ${parentName}`,
//     html: `
//         <p>Hi there, ${req.body}</p>
//     `,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at https://israel001portofolio.onrender.com:${PORT}`);
});
