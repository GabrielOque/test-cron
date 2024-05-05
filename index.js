import express from "express";
import cron from "node-cron";
import nodemailer from "nodemailer";

const app = express();

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

const list = ["oquendogabriel18@gmail.com", "oquendodev@gmail.com"];

app.get("/", (req, res) => {
  res.send("Servidor en funcionamiento");
});

// Programar una tarea periódica con cron
cron.schedule("*/10 * * * *", async () => {
  await transporter.sendMail({
    from: '"Code Journey" <codejourneydevelopers@gmail.com>',
    to: list,
    subject: "Recuerda pagar tu factura",
    text: "Recuerda pagar tu factura que mañana es el día de corte",
  });
  console.log("Se ha enviado un correo electrónico");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
