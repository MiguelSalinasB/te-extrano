const text = "Querida Ivonne Alejandra, Han pasado siete meses desde que nuestros caminos se cruzaron por primera vez, y desde entonces mi vida ha estado llena de una luz que nunca supe que necesitaba. Es difícil expresar con palabras lo que siento por ti, pero quiero intentarlo hoy, en esta carta que lleva consigo todo el amor y la añoranza que he sentido desde que nos separamos.Cada día que pasamos separados solo aumenta mi convicción de que el amor verdadero supera cualquier obstáculo. Extraño cada detalle de ti, desde la forma en que tus ojos brillan cuando sonríes hasta la calidez de tus abrazos que me hacen sentir en casa. En estos días de ausencia, he aprendido que el amor no conoce fronteras ni distancias; el amor es el lazo indestructible que nos une, incluso cuando estamos separados físicamente. Recuerdo las palabras de aquellos que escribieron antes que nosotros, poetas y autores que describieron el poder del amor con una intensidad que solo se puede entender cuando se ama profundamente. Me han enseñado que el amor trasciende el tiempo y el espacio, y que las almas destinadas a estar juntas siempre encontrarán la manera de reunirse, sin importar cuántas vidas pasen. Cada momento que compartimos está grabado en mi corazón como un tesoro inestimable. Cierro los ojos y puedo sentir tu presencia a mi lado, como si el universo conspirara para recordarme que nuestro amor es más grande que cualquier desafío que enfrentemos. Espero con ansias el día en que estemos juntos nuevamente, para perderme en tu mirada y susurrarte al oído todo lo que significas para mí. Hasta entonces, lleva contigo este amor que no conoce límites ni barreras, y recuerda que siempre estaré aquí, esperando el momento en que nuestros corazones se encuentren de nuevo. Con todo mi amor, Miguel";
const textElement = document.getElementById('animated-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Velocidad de la animación de escritura
    }
}

// Iniciar la animación de escritura al cargar la página
document.addEventListener("DOMContentLoaded", typeWriter);

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const intervalTime = 10000; // Tiempo en milisegundos para cambiar las imágenes

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;

    // Pausar todos los videos
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });

    // Reproducir el video en la diapositiva actual si existe
    const currentSlide = slides[index];
    const video = currentSlide.querySelector('video');
    if (video) {
        video.play();
        video.onended = nextSlide;
        clearInterval(interval); // Detener el cambio automático mientras se reproduce el video
    } else {
        // Si no hay video, establecer el intervalo de cambio automático
        clearInterval(interval);
        interval = setInterval(nextSlide, intervalTime);
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Iniciar el slider automáticamente
let interval = setInterval(nextSlide, intervalTime);

// Mostrar la primera diapositiva inicialmente
showSlide(slideIndex);

// Obtener el elemento de audio por su ID
const backgroundAudio = document.getElementById('background-audio');

// Bajar el volumen a la mitad
backgroundAudio.volume = 0.1;
