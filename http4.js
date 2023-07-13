const https = require("https");
const archivo = require("fs");
const path = "./files/contenido.txt";


async function escribir(mensaje) {
    await archivo.appendFile(path, mensaje, (error) => {
      if (error) console.log(error);
      else console.log("El archivo modificado");
    });
  }

https
  .get(`https://mindicador.cl/api/uf`, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const dailyIndicators = JSON.parse(data);


      escribir(dailyIndicators.serie[0].valor.toString())
    });
  })
  .on("error", (err) => {
    console.error("Error al realizar la consulta a la API:", err);
  });
