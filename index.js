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

cron.schedule("* * * * *", async () => {
  await transporter.sendMail({
    from: '"Code Journey" <codejourneydevelopers@gmail.com>',
    to: "oquendogabriel18@gmail.com",
    subject: "Recuerda pagar tu factura",
    text: "Recuerda pagar tu factura que mañana es el dia de corte",
  });
  console.log("running a task every minute");
});
