// Selecciona el botón y el cuerpo
const button = document.getElementById("changeBackgroundButton");
const body = document.body;

// Cambia el fondo cuando el botón está presionado
button.addEventListener("mousedown", function() {
    body.style.backgroundImage = 'url("fondo.png")'; // Imagen al presionar
});

// Vuelve al fondo original al soltar el botón
button.addEventListener("mouseup", function() {
    body.style.backgroundImage = 'url("fondo2.jpg")'; // Imagen original
});

document.getElementById("SoundButton").addEventListener("click", function() {
    const audio = document.getElementById("audio");
    audio.play();
});

