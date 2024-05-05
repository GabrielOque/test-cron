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

const list = ["fredyhernandoqs@gmail.com", "sebastianmonsalvec16@gmail.com"];

app.get("/", (req, res) => {
  res.send("Servidor en funcionamiento");
});

// Programar una tarea periódica con cron
cron.schedule("*/10 * * * *", async () => {
  await transporter.sendMail({
    from: '"Code Journey" <codejourneydevelopers@gmail.com>',
    to: list,
    subject: "Señores desarrolladores",
    text: "Señores esto es una función que les mandará un correo cada 10 minutos, si no me piden porfavor que la quite la dejaré prendida, ademas si no lo hacen invitandome a pastel de pollo, se los envio tambien al correo institucional de Gabriel para vosotros, saludos y bendiciones. Cuando me den el pastel ya lo cambio dado quee esta será la fucion que todos los lunes a las 0 horas nos actualizará la base de datos.",
  });
  console.log("Se ha enviado un correo electrónico");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
