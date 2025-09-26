// Carrousel funcional para tipos de comunicación
let carrouselActual = 0;
function mostrarCarrousel(idx) {
    const items = document.querySelectorAll('.carrousel-rediseñado .carrousel-item');
    items.forEach((item, i) => {
        item.style.display = (i === idx) ? 'block' : 'none';
    });
}
// Menú hamburguesa responsivo
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('abierto');
}

// Scroll compensado para anclas (header fijo)
function scrollConOffset(event, id) {
    event.preventDefault();
    const header = document.querySelector('header');
    const seccion = document.getElementById(id);
    if (seccion) {
        const headerHeight = header.offsetHeight;
        const seccionTop = seccion.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: seccionTop - headerHeight + 5,
            behavior: 'smooth'
        });
        // Cerrar menú hamburguesa en móvil
        const navList = document.getElementById('nav-list');
        if (navList.classList.contains('abierto')) {
            navList.classList.remove('abierto');
        }
    }
}
function mostrarTipo(tipo) {
    const tipos = ['pasivaosumisa', 'pasivoagresiva', 'agresiva', 'asertiva'];
    // Ocultar todos los detalles y remover animación
    tipos.forEach(function(t) {
        const detalle = document.getElementById(t);
        if (detalle) {
            detalle.style.display = 'none';
            detalle.classList.remove('animar-rebote');
        }
    });
    // Mostrar el seleccionado y animar
    const seleccionado = document.getElementById(tipo);
    if (seleccionado) {
        seleccionado.style.display = 'block';
        // Forzar reflow para reiniciar animación
        void seleccionado.offsetWidth;
        seleccionado.classList.add('animar-rebote');
    }
    // Cambiar estado visual de los botones
    const botones = document.querySelectorAll('.tipos-lista button');
    botones.forEach(function(btn) {
        btn.classList.remove('activo');
        // Usar data-tipo si existe, si no comparar por texto
        let btnTipo = btn.getAttribute('data-tipo') || btn.textContent.replace(/\s/g, '').toLowerCase();
        if (btnTipo === tipo) {
            btn.classList.add('activo');
        }
    });
}


const slide = document.querySelector('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalSlides = dots.length;

function updateCarousel() {
    slide.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
    });
});

// Cambio automático cada 5 segundos
setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
}, 5000);
