/** @format */

const express = require("express");
const router = express.Router();
const Form = require("../schema/registrationSchema");
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = process.env.email;
const sendPassword = process.env.pass;

console.log(sendMail, sendPassword);

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: sendMail,
    pass: sendPassword,
  },
});

function sendEmail(email_data) {
  console.log(email_data, "email_data");
  transporter.sendMail(email_data, (err, res) => {
    if (err) {
      console.log(err, "error in sending email");
      return false;
    }

    console.log("Email sent successfully", res);
  });
  return true;
  //   res.status(200).json("your email send successfully");
}

router.post("/addRegistration", async (req, res) => {
  try {
    const { name, email, mobileNo, eventType, eventTime, eventDate, address } =
      req.body;
    const form = new Form({
      name,
      email,
      mobileNo,
      eventType,
      eventTime,
      eventDate,
      address,
    });

    const result = await form.save();
    console.log(result, "result");
    const mailOptions = {
      from: sendMail,
      to: "patelamitkumar153@gmail.com", // Send the email to the user's email
      subject: `Booking Confirmation - ${new Date().toLocaleString()}`,
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                <h2 style="color: #4CAF50;">Booking Confirmation</h2>
                <p>Hello <strong>Deepika Ma'am</strong>,</p>
                <p>Here are new Booking details, Please Contact for Confirmation!</p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Mobile No</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${mobileNo}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Purpose</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${eventType}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Event Time</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${eventTime}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Event Date</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${eventDate}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;"><strong>Address</strong></td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${address}</td>
                    </tr>
                </table>
                <p>Best regards,<br>Ruhi Beauty Parlour</p>
                <p>Tech Department</p>
                <p>For more information, please visit our website <a href="https://ruhibeautyparlour.com">Ruhi Beauty Parlour</a></p>
                <img src="https://res.cloudinary.com/dkubtsnkr/image/upload/v1716575234/tjkrefbwkb2kfdvs5ia6.png" alt="Ruhi Beauty Palour" style="width: 150px;">
            </div>
        `,
    };

    const flag = sendEmail(mailOptions);
    if (flag) {
      res.status(200).json({ error: false, success: true });
    } else {
      res.status(500).json({ error: true });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: true });
  }
});

module.exports = router;
