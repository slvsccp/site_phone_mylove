// Definir a data inicial (formato: ano, mês (0-11), dia, horas, minutos)
const dataInicial = new Date(2024, 2, 24, 22, 6); // 24/03/2024 22:06

function calcularDiferencaDetalhada(dataInicial, agora) {
  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  // Ajuste de dias, meses e anos, se necessário
  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return { anos, meses, dias };
}

function atualizarContador() {
  const agora = new Date();

  // Calcular a diferença total desde a dataInicial
  const diffTotal = agora - dataInicial;

  // Calcular a diferença em anos, meses e dias
  const { anos, meses, dias } = calcularDiferencaDetalhada(dataInicial, agora);

  // Calcular horas, minutos e segundos com base no diffTotal
  const horas = Math.floor((diffTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diffTotal % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diffTotal % (1000 * 60)) / 1000);

  // Atualizar o display com o contador formatado
  document.getElementById("contador").innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

// Chama a função de atualização do contador a cada segundo
setInterval(atualizarContador, 1000);



// Corações caindo
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';

  // Posição aleatória
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Dura entre 3s e 5s

  document.querySelector('.container').appendChild(heart);

  // Remover o coração do DOM após a animação
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Cria corações a cada 800ms
setInterval(createHeart, 700);

const images = [];
for (let i = 1; i <= 23; i++) {
  images.push(`images/IMG_${i}.jpg`);
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function setRandomImage() {
  const imgElement = document.getElementById('couple_id');
  imgElement.src = getRandomImage();
}

window.onload = setRandomImage;

setInterval(setRandomImage, 6000);