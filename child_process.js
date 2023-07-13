const { spawn } = require('child_process');

const child = spawn('node', ['http4.js']);

child.on('error', (err) => {
  console.error(`Ocurrió un error: ${err}`);
});

child.on('exit', (code) => {
  if (code !== 0) {
    console.error(`El proceso hijo finalizó con el código de salida: ${code}`);
  } else {
    console.log('El proceso hijo finalizó correctamente');
  }
});