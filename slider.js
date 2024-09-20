
    // Obtener todos los elementos necesarios
    const sliderAltera = document.getElementById('slider_altera');
    const sliderKmeisa = document.getElementById('slider_kmeisa');
    const sliderTla = document.getElementById('slider_tla');
    const sliderFreedom = document.getElementById('slider_freedom');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlideAltera = 0;
    let currentSlideKmeisa = 0;
    let currentSlideTla = 0;
    let currentSlideFreedom = 0;
    let activeSlider = 'altera'; // Almacena el slider activo
    let autoplayInterval; // Para guardar el intervalo del autoplay

    // Función para avanzar a la siguiente diapositiva
    function nextSlide(slider, currentSlide) {
        const slides = slider.querySelector('.slides');
        const totalSlides = slides.children.length;
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        return currentSlide;
    }

    // Función para retroceder a la diapositiva anterior
    function prevSlide(slider, currentSlide) {
        const slides = slider.querySelector('.slides');
        const totalSlides = slides.children.length;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        return currentSlide;
    }

    // Función de autoplay
    function startAutoplay(slider, currentSlideVar) {
        autoplayInterval = setInterval(() => {
            if (activeSlider === 'altera') {
                currentSlideAltera = nextSlide(sliderAltera, currentSlideAltera);
            } else if (activeSlider === 'kmeisa') {
                currentSlideKmeisa = nextSlide(sliderKmeisa, currentSlideKmeisa);
            } else if (activeSlider === 'tla') {
                currentSlideTla = nextSlide(sliderTla, currentSlideTla);
            } else if (activeSlider === 'freedom') {
                currentSlideFreedom = nextSlide(sliderFreedom, currentSlideFreedom);
            }
        }, 3000); // Cambia cada 3 segundos (ajústalo según sea necesario)
    }

    // Función para detener el autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Función para actualizar los botones del slider
    function updateActiveButton(buttonId) {
        // Obtener todos los botones de slider
        const buttons = document.querySelectorAll('.btn_slider');
        // Quitar la clase active de todos los botones
        buttons.forEach(button => button.classList.remove('active'));
        // Añadir la clase active al botón seleccionado
        const activeButton = document.getElementById(buttonId);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Manejo de eventos de clic para los botones de slider
    document.getElementById('btn_altera').addEventListener('click', () => {
        stopAutoplay();
        sliderAltera.style.display = 'block';
        sliderAltera.style.opacity = '1';
        sliderKmeisa.style.display = 'none';
        sliderKmeisa.style.opacity = '0';
        sliderTla.style.display = 'none';
        sliderTla.style.opacity = '0';
        sliderFreedom.style.display = 'none';
        sliderFreedom.style.opacity = '0';
        activeSlider = 'altera';
        updateActiveButton('btn_altera');
        startAutoplay(sliderAltera, currentSlideAltera);
    });

    document.getElementById('btn_kmeisa').addEventListener('click', () => {
        stopAutoplay();
        sliderAltera.style.display = 'none';
        sliderAltera.style.opacity = '0';
        sliderKmeisa.style.display = 'block';
        sliderKmeisa.style.opacity = '1';
        sliderTla.style.display = 'none';
        sliderTla.style.opacity = '0';
        sliderFreedom.style.display = 'none';
        sliderFreedom.style.opacity = '0';
        activeSlider = 'kmeisa';
        updateActiveButton('btn_kmeisa');
        startAutoplay(sliderKmeisa, currentSlideKmeisa);
    });

    document.getElementById('btn_tla').addEventListener('click', () => {
        stopAutoplay();
        sliderAltera.style.display = 'none';
        sliderAltera.style.opacity = '0';
        sliderKmeisa.style.display = 'none';
        sliderKmeisa.style.opacity = '0';
        sliderTla.style.display = 'block';
        sliderTla.style.opacity = '1';
        sliderFreedom.style.display = 'none';
        sliderFreedom.style.opacity = '0';
        activeSlider = 'tla';
        updateActiveButton('btn_tla');
        startAutoplay(sliderTla, currentSlideTla);
    });

    document.getElementById('btn_freedom').addEventListener('click', () => {
        stopAutoplay();
        sliderAltera.style.display = 'none';
        sliderAltera.style.opacity = '0';
        sliderKmeisa.style.display = 'none';
        sliderKmeisa.style.opacity = '0';
        sliderTla.style.display = 'none';
        sliderTla.style.opacity = '0';
        sliderFreedom.style.display = 'block';
        sliderFreedom.style.opacity = '1';
        activeSlider = 'freedom';
        updateActiveButton('btn_freedom');
        startAutoplay(sliderFreedom, currentSlideFreedom);
    });

    // Botones de navegación (anterior y siguiente)
    nextButton.addEventListener('click', () => {
        stopAutoplay();
        if (activeSlider === 'altera') {
            currentSlideAltera = nextSlide(sliderAltera, currentSlideAltera);
        } else if (activeSlider === 'kmeisa') {
            currentSlideKmeisa = nextSlide(sliderKmeisa, currentSlideKmeisa);
        } else if (activeSlider === 'tla') {
            currentSlideTla = nextSlide(sliderTla, currentSlideTla);
        } else if (activeSlider === 'freedom') {
            currentSlideFreedom = nextSlide(sliderFreedom, currentSlideFreedom);
        }
        startAutoplay(); // Reiniciar autoplay después de la interacción
    });

    prevButton.addEventListener('click', () => {
        stopAutoplay();
        if (activeSlider === 'altera') {
            currentSlideAltera = prevSlide(sliderAltera, currentSlideAltera);
        } else if (activeSlider === 'kmeisa') {
            currentSlideKmeisa = prevSlide(sliderKmeisa, currentSlideKmeisa);
        } else if (activeSlider === 'tla') {
            currentSlideTla = prevSlide(sliderTla, currentSlideTla);
        } else if (activeSlider === 'freedom') {
            currentSlideFreedom = prevSlide(sliderFreedom, currentSlideFreedom);
        }
        startAutoplay(); // Reiniciar autoplay después de la interacción
    });

    // Inicializar autoplay al cargar la página
    startAutoplay(sliderAltera, currentSlideAltera);

