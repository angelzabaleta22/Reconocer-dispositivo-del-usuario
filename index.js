//Estos son ejercicios de práctica y codeados por mí, sacados de la página web del fazt.  https://faztweb.com. Créditos a él.
//Ejercico para saber desde qué dispositivos, o reconocer el dispositivo desde el cual se visita la página.
//Debes de ejecutar en una termial paralela la herramienta ngrok.exe (Modo de ejeción: ngrok http 3000)

const express = require("express");
const device = require("express-device");
const app = express();

//express-divice es un middleware por eso hay que ejecutarlo antes de las rutas.

app.use(device.capture());

//Ruta
app.get("/", (req, res) => {
  console.log(req.device);
  res.send("Hola, tu dispositivo es un: " + req.device.type);
});

//Puerto del servidor
app.listen(3000, () => console.log("Server listening on port 3000"));
