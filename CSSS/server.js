const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa o pacote CORS

const app = express();
const PORT = 3000;

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(bodyParser.json());

let cameras = [];

// Rota para obter todos os controladores de câmera
app.get('/cameras', (req, res) => {
  res.json(cameras);
});


// Rota para atualizar as informações do último movimento
app.get('/cameras/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const cameraToUpdate = cameras.find(camera => camera.id === id);
  if (cameraToUpdate) {
    res.json(cameraToUpdate);
  } else {
    res.status(404).json({ error: 'Camera not found' });
  }
});


// Rota para criar um novo controlador de câmera
app.post('/cameras', (req, res) => {
  const { id, location } = req.body;
  const newCamera = { id, location, lastMovement: null };
  cameras.push(newCamera);
  res.json(newCamera);
});

// Rota para atualizar as informações do último movimento
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

// Rota para excluir um controlador de câmera
app.delete('/cameras/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cameras = cameras.filter(camera => camera.id !== id);
  res.json({ message: 'desativada' });
});

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
