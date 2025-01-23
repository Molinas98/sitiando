document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animated-text");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const words = element.textContent.split(" ");
                element.innerHTML = words.map((word, index) => 
                    `<span class="word" style="animation-delay: ${index * 0.1}s">${word}</span>`
                ).join(" ");
                
                element.classList.add("visible"); // Puedes añadir una clase para activar la animación
                observer.unobserve(element); // Dejar de observar cuando ya es visible
            }
        });
    }, {
        threshold: 0.8 // Comienza la animación cuando el 10% del elemento sea visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
