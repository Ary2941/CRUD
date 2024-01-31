let cameras = [];
let camera = "START";
let camera_index = 0;
let camera_max = 1;
let camera_status = false;


async function readCamerasToCameras() {
  try {
    const response = await axios.get(`${baseUrl}/cameras`);
    const alt = [];
    for (let i = 0; i < response.data.length; i++) {
      alt.push(response.data[i]);
    }
    cameras = alt;
  } catch (error) {
    console.error('Erro ao obter controladores de câmera:', error.message);
  }
}


///////////////////////////////////////////////////////
const baseUrl = 'http://localhost:3000';

async function readCameraExists(id_){
  for (let i = 0; i < cameras.length; i++) {
    if(cameras[i].id == id_){
      camera_status = true;
      return;
    }
    
  }
  camera_status = false;
}

// Create _______________________________________________________________________________________________________________
async function createCamera(id, location) {
  try {
    const response = await axios.post(`${baseUrl}/cameras`, { id, location });
    console.log('Agora a câmera', response.data.id,"localizada em",response.data.location, "pode ser controlada.");
  } catch (error) {
    console.error('Erro ao criar um novo Controlador de Câmera:', error.message);
  }
}

// Read _______________________________________________________________________________________________________________

async function readCameraLastMove(id){
  const response = await axios.get(`${baseUrl}/cameras/${id}`);
  return response.data.lastMovement;
}

async function readCameras() {
  try {
    const response = await axios.get(`${baseUrl}/cameras`);
    return response.data;

  } catch (error) {
    console.error('Erro ao obter controladores de câmera:', error.message);
  }
}

async function readCameraExistence(id){
  const response = await axios.get(`${baseUrl}/cameras/${id}`);
  return response.data;
}


// Update _______________________________________________________________________________________________________________
async function updateLastMovement(id, lastMovement) {
  try {
    const response = await axios.put(`${baseUrl}/cameras/${id}`, { lastMovement });
    console.log("\nCâmera",response.data.id,"foi movida para a" , response.data.lastMovement,"agora.");
  } catch (error) {
    console.error('Erro ao atualizar as informações do último movimento:', error.message);
  }
}

// Delete _______________________________________________________________________________________________________________
async function deleteCamera(id) {
  try {
    const response = await axios.delete(`${baseUrl}/cameras/${id}`);
    console.log(response.data.message);
  } catch (error) {
    console.error('Erro ao excluir o Controlador de Câmera:', error.message);
  }
}

///////////////////////////////////////////////////////

const cameraForm = document.getElementById('cameraForm');
cameraForm.addEventListener('submit', function () {
  const idInput = parseInt(document.getElementById('id').value);
  const locationInput = document.getElementById('location').value;
  createCamera(idInput, locationInput);
  idInput.value = '';
  locationInput.value = '';
  readCamerasToCameras();

});

document.getElementById('natal').addEventListener('click', function() {

  if (camera_status == true){
    var camerabutton = document.getElementById('camera');
    var onofbutton = document.getElementById('natal');

    deleteCamera(camera);
    readCamerasToCameras();

    camera = "";
    camera_index = 0;
    camera_max = 1;
    camera_status = false;

    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = camera.toString();
    onofbutton.style.backgroundColor = 'blue';

  }
  


});

document.getElementById('camera').addEventListener('click', function() {
  var camerabutton = document.getElementById('camera');
  var onofbutton = document.getElementById('natal');

  if (camera_index < cameras.length){
    camera = cameras[camera_index].id;
    readCameraExists(camera);

    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = cameras[camera_index].lastMovement;
    onofbutton.style.backgroundColor = 'red';
    camera_index++;


  } else{
    camera_index=0;
    camera = "";
    readCameraExists(camera);
    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = "";
  } 
});

document.getElementById('up').addEventListener('click', function() {
  if(camera_status == true){
    updateLastMovement(camera, '&#8593;');
    readCamerasToCameras();
    var onofbutton = document.getElementById('natal');
    onofbutton.innerHTML = "&#8593;";
  }
});

document.getElementById('down').addEventListener('click', function() {
  if(camera_status == true){
    updateLastMovement(camera, '&#8595;');
    readCamerasToCameras();
    var onofbutton = document.getElementById('natal');
    onofbutton.innerHTML = "&#8595;";
  }
});

document.getElementById('left').addEventListener('click', function() {
  if(camera_status == true){
    updateLastMovement(camera, '&#8592;');
    readCamerasToCameras();
    var onofbutton = document.getElementById('natal');
    onofbutton.innerHTML = "&#8592;";

  }
});

document.getElementById('right').addEventListener('click', function() {
  if(camera_status == true){
    updateLastMovement(camera, '&#8594;');
    readCamerasToCameras();
    var onofbutton = document.getElementById('natal');
    onofbutton.innerHTML = "&#8594;";

  }
});
readCamerasToCameras();