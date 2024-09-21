var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Holi Raquel", time: 19 },
  { text: "Espero te guste", time: 23 },
  { text: "Este pequeño detalle", time: 27 },
  { text: "Se que no es mucho", time: 31 },
  { text: "Pero lo hice de corazón", time: 35 },
  { text: "Pensando en ti.", time: 39 },
  { text: "Quiza no pude darte", time: 44 },
  { text: "Flores de verdad", time: 48 },
  { text: "Porque no quieres", time: 52 },
  { text: "Que te visite xd", time: 56 },
  { text: "Pero espero que", time: 60 },
  { text: "Esto cubra en algo jijiji", time: 64 },
  { text: "Son las primeras", time: 68 },
  { text: "Flores amarillas que te doy", time: 72 },
  { text: "Pero no seran las ultimas", time: 76 },
  { text: "Lo habia planeado ", time: 80 },
  { text: "Un poco diferente", time: 84 },
  { text: "Pero a veces las cosas", time: 88 },
  { text: "No salen como planeo", time: 92 },
  { text: "Bueno casi siempre", time: 96 },
  { text: "Gracias por leerme", time: 100 },
  { text: "Cuando toy bajoneado", time: 104 },
  { text: "Espero te recuperes pronto", time: 108 },
  { text: "Extraño salir contigo", time: 112 },
  { text: "Extraño hablar contigo", time: 116 },
  { text: "Avanza con la tesis eh", time: 120 },
  { text: "Tengo que verte sustentar", time: 124 },
  { text: "Y tenemos que seguir", time: 128 },
  { text: "Buscando suggars xd", time: 132 },
  { text: "Perdon por ser nadaqueveriento", time: 136 },
  { text: "Jajaja okno sales con cada cosa", time: 140 },
  { text: "Te quiero mucho pinky", time: 144 },
  { text: "Espero te haya gustado", time: 148 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);


function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 18000);