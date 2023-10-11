// JavaScript para el efecto de escritura automática
const textElement = document.getElementById('typing-text');
const textToType = textElement.textContent;
textElement.textContent = ''; // Limpiamos el contenido original

let charIndex = 0;
const typingSpeed = 50; // Velocidad de escritura en milisegundos

function typeText() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

typeText(); // Comienza la escritura automática
