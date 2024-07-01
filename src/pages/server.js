// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const path = require('path');

// // // Ensure we load the .env file
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// // const app = express();
// // const port = process.env.PORT || 5000;

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(cors());

// // // Debugging: Check if .env file is being read
// // console.log('Loading environment variables...');
// // console.log('Email User:', process.env.EMAIL_USER);
// // console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

// // // Nodemailer transporter setup
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // // Endpoint to handle form submission
// // app.post('/send', (req, res) => {
// //   const { name, email, message } = req.body;

// //   const mailOptions = {
// //     from: email,
// //     to: process.env.EMAIL_USER,
// //     subject: `New Feedback from ${name}`,
// //     text: message,
// //     html: `
// //       <div style="font-family: Arial, sans-serif; color: #333;">
// //         <h2>You have a new feedback from ${name} (${email})</h2>
// //         <p style="font-size: 16px; line-height: 1.5;">
// //           ${message}
// //         </p>
// //         <p style="font-size: 14px; color: #555;">
// //           --<br>
// //           This email was sent from your portfolio contact form.
// //         </p>
// //       </div>
// //     `,
// //   };

// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.error('Error sending email:', error); // Log the error
// //       return res.status(500).send(error.toString());
// //     }
// //     res.status(200).send('Email sent: ' + info.response);
// //   });
// // });

// // // Start the server
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });


// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

// // Ensure we load the .env file
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Debugging: Check if .env file is being read
// console.log('Loading environment variables...');
// console.log('Email User:', process.env.EMAIL_USER);
// console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Endpoint to handle form submission
// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   console.log('Form data received:', { name, email, message });

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: `New Feedback from ${name}`,
//     text: message,
//     html: `
//       <div style="font-family: Arial, sans-serif; color: #333;">
//         <h2>You have a new feedback from ${name} (${email})</h2>
//         <p style="font-size: 16px; line-height: 1.5;">
//           ${message}
//         </p>
//         <p style="font-size: 14px; color: #555;">
//           --<br>
//           This email was sent from your portfolio contact form.
//         </p>
//       </div>
//     `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error); // Log the error
//       return res.status(500).send(error.toString());
//     }
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
