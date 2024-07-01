// pages/api/contact.js
import nodemailer from 'nodemailer';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email, // user's email address
            to: process.env.RECEIVER_EMAIL,
            subject: `New message from ${name}`,
            text: message,
            html: `<p>You have a new message from <b>${name}</b> (${email}):</p><p>${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }
};

export default handler;
