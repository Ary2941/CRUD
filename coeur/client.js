const axios = require('axios');

const baseUrl = 'http://localhost:3000';

// Create
async function createCamera(id, location) {
  try {
    const response = await axios.post(`${baseUrl}/cameras`, { id, location });
    console.log('CREATE! id:', response.data.id,"location:",response.data.location,"\n");
  } catch (error) {
    console.error('Erro ao criar um novo Controlador de Câmera:', error.message);
  }
}

// Read
async function readCameras() {
  try {
    const response = await axios.get(`${baseUrl}/cameras`);
    console.log('READ! todas as cameras:');


    if (response.data.length == 0){
      console.log(" nenhuma kk\n");
    } else {
      for (let i = 0; i < response.data.length; i++) {
        console.log(" ",response.data[i].id,response.data[i].location);
      }
      console.log('');  
    }
    

  } catch (error) {
    console.error('Erro ao obter controladores de câmera:', error.message);
  }
}

async function readCamera(id){
  const response = await axios.get(`${baseUrl}/cameras/${id}`);
  console.log(response.data.id,response.data.location);
}

// Update
async function updateLastMovement(id, lastMovement) {
  try {
    const response = await axios.put(`${baseUrl}/cameras/${id}`, { lastMovement });
    console.log("UPDATE! Câmera",response.data.id,"foi movida para a" , response.data.lastMovement,"agora.\n");
  } catch (error) {
    console.error('Erro ao atualizar as informações do último movimento:', error.message);
  }
}

// Delete
async function deleteCamera(id) {
  try {
    const response = await axios.delete(`${baseUrl}/cameras/${id}`);
    console.log("DELETE! id:",response.data.message,"\n");
  } catch (error) {
    console.error('Erro ao excluir o Controlador de Câmera:', error.message);
  }
}


// Exemplos de uso
createCamera(999, 'Entrada Principal');
updateLastMovement(999, 'esquerda');

deleteCamera(999);

createCamera(998, 'Quintal');
updateLastMovement(998, 'esquerda');

createCamera(997, 'salas');

readCameras();

