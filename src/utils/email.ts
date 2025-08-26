// utils/email.ts
import nodemailer from 'nodemailer';

export async function sendAdminBookingEmail({ name, phone, email, guests, date, time, message }: {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  message?: string;
}) {
  // Configure your SMTP transport (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) throw new Error('ADMIN_EMAIL not set');
console.log(adminEmail, 'mail adree')
  const mailOptions = {
    from: `Hotel Reservation <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: 'New Table Booking Request',
    html: `
      <h2>New Table Booking</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Guests:</b> ${guests}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <p><b>Message:</b> ${message || ''}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
