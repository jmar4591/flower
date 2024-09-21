// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Holi amor", time: 19 },
  { text: "Espero te guste", time: 23 },
  { text: "Este pequeño detalle", time: 27 },
  { text: "Se que no es mucho", time: 31 },
  { text: "Pero lo hice de corazón", time: 35 },
  { text: "Pensando en ti.", time: 39 },
  { text: "Se que no puedo darte mucho", time: 44 },
  { text: "Pero lo poco que te doy", time: 48 },
  { text: "Lo hago de corazon", time: 52 },
  { text: "Quiza no pude comprar", time: 56 },
  { text: "Flores de verdad", time: 60 },
  { text: "Pero espero que", time: 64 },
  { text: "Esto cubra en algo xd", time: 68 },
  { text: "Son las primeras", time: 72 },
  { text: "Flores amarillas que te doy", time: 76 },
  { text: "Pero no seran las ultimas", time: 80 },
  { text: "Gracias por soportarme", time: 84 },
  { text: "Y apoyarme en todo", time: 88 },
  { text: "Y aunque a veces este", time: 92 },
  { text: "De mal humor me aguantas", time: 96 },
  { text: "Perdon por ser malo a vcs", time: 100 },
  { text: "Solo que me bajoneo", time: 104 },
  { text: "Pero gracias por estar a mi lado", time: 108 },
  { text: "Gracias por no dejarme solo", time: 112 },
  { text: "Perdon x hacerte llorar a vcs", time: 116 },
  { text: "Te amo muuucho", time: 120 },
  { text: "Mi porcino jejeje", time: 124 },
  { text: "Sigue esforzandote si?", time: 128 },
  { text: "Siempre lucha por tus sueños", time: 132 },
  { text: "Y tus metas", time: 136 },
  { text: "Lo estas haciendo bien", time: 140 },
  { text: "Y estoy muy orgulloso de ti", time: 144 },
  { text: "Se que todo lo que te propongas", time: 148 },
  { text: "Lo lograras", time: 152 },
  { text: "Eres una gran persona", time: 156 },
  { text: "Y seras una gran profesional", time: 160 },
  { text: "No te desanimes mucho", time: 164 },
  { text: "Cuando algo no te salga bien", time: 168 },
  { text: "Todo siempre se soluciona", time: 172 },
  { text: "Espero te haya gustado amor", time: 176 },
  { text: "Te amo mucho ♥", time: 180 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 18000);