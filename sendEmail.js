// sendEmail.js

const nodemailer = require('nodemailer');

// SMTP-Konfiguration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// E-Mail-Optionen
const mailOptions = {
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: 'Test-E-Mail von GitHub Actions',
  text: 'Dies ist eine Test-E-Mail von GitHub Actions.',
};

// E-Mail senden
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Fehler beim Senden der E-Mail:', error);
  }
  console.log('E-Mail erfolgreich gesendet:', info.response);
});
