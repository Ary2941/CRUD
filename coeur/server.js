const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // hihi burlei a política do CORS
app.use(bodyParser.json());
app.use(express.static('public'));

let cameras = [];

// abrindo o server
app.listen(PORT, () => {
  console.log(`controle hospedado em localhost:${PORT}`);
});

// Rota para o controle
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view.html');
});

// Rota para obter todas as câmeras
app.get('/cameras', (req, res) => {
  res.json(cameras);
});

// Rota para obter uma câmera pelo id
app.get('/cameras/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const cameraToUpdate = cameras.find(camera => camera.id === id);
  if (cameraToUpdate) {
    res.json(cameraToUpdate);
  } else {
    res.status(404).json({ error: 'Camera not found' });
  }
});

// Rota para adicionar nova câmera
app.post('/cameras', (req, res) => {
  const { id, location } = req.body;
  const newCamera = { id, location, lastMovement: null };
  cameras.push(newCamera);
  res.json(newCamera);
});

// Rota para atualizar as informações do último movimento de uma câmera
app.put('/cameras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const lastMovement = req.body.lastMovement;

  const cameraToUpdate = cameras.find(camera => camera.id === id);
  if (cameraToUpdate) {
    cameraToUpdate.lastMovement = lastMovement;
    res.json(cameraToUpdate);
  } else {
    res.status(404).json({ error: 'Camera not found' });
  }
});

// Rota para excluir uma câmera do server
app.delete('/cameras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cameras = cameras.filter(camera => camera.id !== id);
  res.json({ message: 'desativada' });
});

// Rota para css
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

// rota para js
app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
});


// rota para js
app.get('/song.mp3', (req, res) => {
  res.sendFile(__dirname + '/remote control.mp3');
});

// rota para js
app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
});
