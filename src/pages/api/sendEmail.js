import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { firstname, lastname, email, message } = req.body;

  // Nodemailer beállítások
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Gmail-cím
      pass: 'your-email-password', // Gmail-jelszó vagy app-specifikus jelszó
    },
  });

  try {
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'rigoeszter.masszazs@gmail.com', // A címzett
      subject: 'Új üzenet a weboldaladról',
      text: `Név: ${firstname} ${lastname}\nEmail: ${email}\nÜzenet: ${message}`,
    });

    return res.status(200).json({ message: 'Email elküldve!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Hiba történt az e-mail küldése közben.' });
  }
}
