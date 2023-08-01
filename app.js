const express = require('express');
const path = require('node:path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (_req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
