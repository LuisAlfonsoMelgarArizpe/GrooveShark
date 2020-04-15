const express = require("express");
const app = express();
app.listen(4000, () => {
    let host = 'localhost';
    console.log('El servidor esta prendido en http://%s:%s', host, 4000)
})

app.get("/holamundo",(req,res)=>{
	res.text("hola mundo");
})


app.get("/almacenaje",(req,res)=>{
	res.text("Almacenaje");
})