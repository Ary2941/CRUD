const axios = require('axios');

const baseUrl = 'http://localhost:3000';

// Create
async function createCamera(id, location) {
  try {
    const response = await axios.post(`${baseUrl}/cameras`, { id, location });
    console.log('Agora a câmera', response.data.id,"localizada em",response.data.location, "pode ser controlada.");
  } catch (error) {
    console.error('Erro ao criar um novo Controlador de Câmera:', error.message);
  }
}

// Read
async function readCameras() {
  try {
    const response = await axios.get(`${baseUrl}/cameras`);
    console.log('\nCâmeras sendo controladas:');


    if (response.data.length == 0){
      console.log("nenhuma kk\n");
    } else {
      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i].id,response.data[i].location);
      }
      console.log('');  
    }
    

  } catch (error) {
    console.error('Erro ao obter controladores de câmera:', error.message);
  }
}

// Update
async function updateLastMovement(id, lastMovement) {
  try {
    const response = await axios.put(`${baseUrl}/cameras/${id}`, { lastMovement });
    console.log("\nCâmera",response.data.id,"foi movida para a" , response.data.lastMovement,"agora.");
  } catch (error) {
    console.error('Erro ao atualizar as informações do último movimento:', error.message);
  }
}

// Delete
async function deleteCamera(id) {
  try {
    const response = await axios.delete(`${baseUrl}/cameras/${id}`);
    console.log(response.data.message);
  } catch (error) {
    console.error('Erro ao excluir o Controlador de Câmera:', error.message);
  }
}


// Exemplos de uso
readCameras();
createCamera(1, 'Entrada Principal');
updateLastMovement(1, 'esquerda');
readCameras();

deleteCamera(1);
readCameras();

