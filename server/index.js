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

// Se solucionaron algunos errores

app.post("/cargarCanciones", (req, res) => {
  res.text("Canciones cargadas con exito!");
});

app.get("/buscarCanciones", (req, res) => {
  res.text("Lista de canciones que hacen match con la busqueda");
});


app.get("favCanciones", (req, res) => {
  res.text("Lista de canciones favoritas");
});
