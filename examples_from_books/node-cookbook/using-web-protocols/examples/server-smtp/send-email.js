import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 4321,
});

transporter.sendMail(
  {
    from: 'hassonor@gmail.com',
    to: 'orhasson777@gmail.com',
    subject: 'Hello',
    text: 'Hello world!',
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log('Message Sent:', info);
  },
);
