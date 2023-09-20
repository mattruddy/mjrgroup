var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  const email = process.env.NODEMAILER_EMAIL;
  const pw = process.env.NODEMAILER_PW;
  console.log({ email, pw });
  var transporter = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: true,
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText,
  };
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
