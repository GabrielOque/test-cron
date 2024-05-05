import cron from "node-cron";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "codejourneydevelopers@gmail.com",
    pass: "dkfr rgjf fjnn fawh",
  },
  tls: {
    rejectUnauthorized: false,
  },
  debug: true,
});
list = ["oquendogabriel18@gmail.com", "oquendodev@gmail.com"];
cron.schedule("*/10 * * * *", async () => {
  await transporter.sendMail({
    from: '"Code Journey" <codejourneydevelopers@gmail.com>',
    to: list,
    subject: "Recuerda pagar tu factura",
    text: "Recuerda pagar tu factura que mañana es el dia de corte",
  });
  console.log("running a task every minute");
});
