const express = require("express");
const app = express();
app.listen(4000, () => {
  let host = "localhost";
  console.log("El servidor esta prendido en http://%s:%s", host, 4000);
});

app.get("/holamundo", (req, res) => {
  res.text("hola mundo");
});

app.get("/almacenaje", (req, res) => {
  res.text("Almacenaje");
});

app.get("/registro", (req, res) => {
  res.text("Usuario Registrado!!!");
});

app.get("/login", (req, res) => {
  res.text("Login Correcto");
});



// SE AJUSTARON LAS VERSIONES xd


app.get("/perfil", (req, res) => {
  res.text("Perfil del usuario finalizado");
});

app.post("/buscarUsuario", (req, res) => {
  res.text("Usuario encontrado!");
});

