import nodemailer from "nodemailer";
import "dotenv/config";
import ENV from "../config/ENV.config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Gmail recommande 587 avec STARTTLS (secure: false)
  secure: false,
  auth: {
    user: ENV("process.env.MAIL_SERVER_ADMIN", "warning"),
    pass: ENV("process.env.MAIL_PASSWORD", "warning"),
  },
});

export default transporter;
