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

app.get("/descargarCancion", (req, res) => {
  res.text("Descarga la cancion seleccionada");
});

// SE CORRIGIERON ALGUNOS ERRORES DE IMPLEMENTACION EN EL RELEASE
app.post("/crearPlaylist", (req, res) => {
  res.text("Crear Playlist");
});

app.post("/anadirCancion", (req, res) => {
  res.text("añadir cancion");
});

app.get("/visualizarPlaylist", (req, res) => {
  res.text("La playlist que se esta visualizando.");
});

app.get("/buscarPlaylist", (req, res) => {
  res.text("Lista de playlist que coincide con la busqueda.");
});

app.post("/favoritosPlaylist", (req, res) => {
  res.text("Playlist agregada a favoritos.");
});
