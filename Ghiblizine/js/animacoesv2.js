//criar um moedeo da moeda
function createmodel() {
  var themodel = document.createElement('a-gltf-model');
  themodel.innerHTML = '<a-gltf-model color="yellow" class="coinflip" model-opacity="0.1" position="-1 0 -10" scale="0.03 0.03 0.03" rotation="0 0 0" src="#coin"></a-gltf-model>';
  var scene = document.getElementsByTagName("a-scene");
  scene[0].appendChild(themodel);
}

//funçao para numero random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var n = 150; // numbero de moedas
var op = new Array(n);
var ang = new Array(n);
var pos = new Array(n);
var angadd = new Array(n); // adição que se faz ao angulo
var posadd = new Array(n); // adição que se faz a aceleraçao
var opadd = new Array(n); // adição que se faz a opacidade

for (let i = 0; i < n; i++) {
  createmodel();
  op[i] = 1; // opacidade
  ang[i] = 0; //angulo de rotação
  pos[i] = 0; // incremento da posiçao / aceleração
  angadd[i] = getRandomArbitrary(-10, 10);
  posadd[i] = getRandomArbitrary(0.003, 0.007);
  opadd[i] = getRandomArbitrary(0.005, 0.015);
}
contador = 0; // contador que permite criar variáveis dentro do setInterval
var coin = document.querySelectorAll(".coinflip"); //coinflip




//animação de uma moeda a rodar e a cair
window.setInterval(function () {
  if (contador == 0) {
    for (let i = 0; i < n; i++) {
      coin[i].object3D.position.y = getRandomArbitrary(10, 70);
      coin[i].object3D.position.x = getRandomArbitrary(-20, 20);
    }
  }
  contador++;
  for (let i = 0; i < n; i++) {
    ang[i] += angadd[i];
    pos[i] += posadd[i];
    op[i] = op[i] - opadd[i];

    if (ang[i] >= 360)
      ang[i] = 0;

    if (op[i] <= 0) {
      op[i] = 0;
    }
    if (pos[i] >= 0.5) {
      pos[i] = 0;
      coin[i].object3D.position.y = getRandomArbitrary(10, 70);
      op[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    coin[i].object3D.rotation.x = THREE.Math.degToRad(ang[i]);
    coin[i].object3D.rotation.z = THREE.Math.degToRad(45);
    coin[i].object3D.position.y -= pos[i];
  }

  //mudar a opacidade
  for (let i = 0; i < n; i++)
    coin[i].setAttribute('model-opacity', op[i]);

  //fazer botão para ir para ghibli magazine aparecer depois de um tempo
  if (contador == 150) {
    var link = document.createElement('a');
    var loadbutton = document.querySelector("#Loading");
    link.innerHTML = '<a  style="color:white; text-decoration: none;" href="Homepage.html"> Go to Ghiblizine >> </a>';
    loadbutton.appendChild(link);
    loadbutton.innerHTML = '<a  style="color:white; text-decoration: none;" href="Homepage.html"> Go to Ghiblizine >> </a>';

    loadbutton.setAttribute("class","pulsar");
  }
}, 40);








