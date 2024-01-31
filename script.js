let isRemoteOn = true;
let camera = 0;
let camera_index = 0;
let camera_max = 1;
let cameras = [];

///////////////////////////////////////////////////////
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
    return response.data;

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

///////////////////////////////////////////////////////



document.getElementById('natal').addEventListener('click', function() {
  var camerabutton = document.getElementById('camera');
  var onofbutton = document.getElementById('natal');
  camera_index = cameras.length+1;

  if (camera == 0 ) {
    camera = camera_max;
    cameras.push(camera);
    createCamera(camera,"sala");
    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = "OFF"
    onofbutton.style.backgroundColor = 'red';



    camera_max ++;
  } else {
    camerabutton.innerHTML = "0";
    deleteCamera(camera);
    let ncameras = cameras.filter(cameras => cameras !== camera);
    cameras = ncameras;
    camera = 0;
    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = "NEW?"
    onofbutton.style.backgroundColor = 'green';

  }

});


document.getElementById('camera').addEventListener('click', function() {
  var camerabutton = document.getElementById('camera');
  var onofbutton = document.getElementById('natal');
  if (camera_index < cameras.length){
    camera = cameras[camera_index];
    console.log(camera);
    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = "OFF"
    onofbutton.style.backgroundColor = 'red';

    camera_index++;
  } else{
    camera_index=0;
    camera = 0
    camerabutton.innerHTML = camera.toString();
    onofbutton.innerHTML = "NEW?"
    onofbutton.style.backgroundColor = 'green';


  } 
});


document.getElementById('up').addEventListener('click', function() {
  if (cameras.includes(camera)) {
    updateLastMovement(camera, 'cima');
  } else {
    console.log('Controle remoto desligado. Ligue antes de usar.');
  }
});

document.getElementById('down').addEventListener('click', function() {
  if (cameras.includes(camera)) {
    // Adicione sua lógica de movimento para baixo aqui
    updateLastMovement(camera, 'baixo');

  } else {
    console.log('Controle remoto desligado. Ligue antes de usar.');
  }
});

document.getElementById('left').addEventListener('click', function() {
  if (cameras.includes(camera)) {
    // Adicione sua lógica de movimento para a esquerda aqui
    updateLastMovement(camera, 'esquerda');

  } else {
    console.log('Controle remoto desligado. Ligue antes de usar.');
  }
});

document.getElementById('right').addEventListener('click', function() {
  if (cameras.includes(camera)) {
    // Adicione sua lógica de movimento para a direita aqui
    updateLastMovement(camera, 'direita');

  } else {
    console.log('Controle remoto desligado. Ligue antes de usar.');
  }
});