// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// const nodemailer = require('nodemailer');

// console.log('Email User:', process.env.EMAIL_USER);
// console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

// module.exports = async (req, res) => {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     console.log('Form data received:', { name, email, message });

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Feedback from ${name}`,
//       text: message,
//       html: `
//         <div style="font-family: Arial, sans-serif; color: #333;">
//           <h2>You have a new feedback from ${name} (${email})</h2>
//           <p style="font-size: 16px; line-height: 1.5;">
//             ${message}
//           </p>
//           <p style="font-size: 14px; color: #555;">
//             --<br>
//             This email was sent from your portfolio contact form.
//           </p>
//         </div>
//       `,
//     };

//     try {
//       const info = await transporter.sendMail(mailOptions);
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent: ' + info.response });
//     } catch (error) {
//       console.error('Error sending email:', error); // Log the error
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} not allowed`);
//   }
// };
