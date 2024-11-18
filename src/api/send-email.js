import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yourEmail@gmail.com', // Replace with your Gmail
          pass: 'yourAppPassword', // Replace with your Gmail app password
        },
      });

      await transporter.sendMail({
        from: email,
        to: 'cynthiacleopatra03@gmail.com', // Your recipient email
        subject: `New Message from ${fullName}`,
        text: message,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Email could not be sent.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
