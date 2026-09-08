document.addEventListener("DOMContentLoaded", function () {

    // ANIMACIÓN DE BARRAS DE HABILIDADES
    const barrasProgreso = document.querySelectorAll('.progreso');

    barrasProgreso.forEach(function (barra) {
        const anchoDeseado = barra.style.width;
        barra.style.width = '0%';

        setTimeout(function () {
            barra.style.width = anchoDeseado;
        }, 300);
    });

    // CAMBIO DE IDIOMA
    const selector = document.querySelector("#selector-idioma");
    const bandera = document.querySelector("#bandera");

    selector.addEventListener("change", function () {

        if (selector.value === "en") {
            bandera.textContent = "🇺🇸";

            // Menú de navegación
            document.querySelector("#link-inicio").textContent = "Home";
            document.querySelector("#link-sobre-mi").textContent = "About me";
            document.querySelector("#link-proyectos").textContent = "Projects";
            document.querySelector("#link-habilidades").textContent = "Skills";
            document.querySelector("#link-contacto").textContent = "Contact";

            // Sección Inicio
            document.querySelector("#txt-saludo").textContent = "Hello, I'm Matias 🖐";
            document.querySelector("#txt-titulo-profesion").textContent = "Junior Frontend Developer";
            document.querySelector("#txt-descripcion-inicio").textContent = "I create modern, functional, and responsive web experiences using frontend technologies.";
            document.querySelector("#btn-ver-proyectos").textContent = "View projects ->";
            document.querySelector("#btn-contacto").textContent = "Contact me ✉";

            // Sección Sobre mí
            document.querySelector("#titulo-sobre-mi").textContent = "About me";
            document.querySelector("#txt-sobre-mi").innerHTML = "I am a Junior Frontend Developer passionate about creating modern and attractive websites.<br>I focus on writing clean code, learning, and turning ideas into digital products.";

            // Sección Proyectos
            document.querySelector("#titulo-proyectos").textContent = "Projects";
            document.querySelector("#desc-proyectos").textContent = "Some projects I have developed to practice and improve my skills.";
            document.querySelector("#desc-p1").textContent = "Web platform focused on improving job search experience and compatibility.";
            document.querySelector("#btn-p1-ver").textContent = "View project";

            // Sección Habilidades
            document.querySelector("#titulo-habilidades").textContent = "Skills";

            // Sección Contacto
            document.querySelector("#titulo-contacto").textContent = "Contact";
            document.querySelector("#txt-contacto-pregunta").textContent = "Have a project in mind? Let's talk and work together.";
            document.querySelector("#btn-contactarme").textContent = "Contact me ✉";

            // Pie de página
            document.querySelector("#txt-footer").textContent = "© 2026 Matias Santelices. All rights reserved.";

        } else {
            bandera.textContent = "🇪🇸";

            // Menú de navegación
            document.querySelector("#link-inicio").textContent = "Inicio";
            document.querySelector("#link-sobre-mi").textContent = "Sobre mí";
            document.querySelector("#link-proyectos").textContent = "Proyectos";
            document.querySelector("#link-habilidades").textContent = "Habilidades";
            document.querySelector("#link-contacto").textContent = "Contactos";

            // Sección Inicio
            document.querySelector("#txt-saludo").textContent = "Hola, soy Matias 🖐";
            document.querySelector("#txt-titulo-profesion").textContent = "Desarrollador Frontend Junior";
            document.querySelector("#txt-descripcion-inicio").textContent = "Creo experiencias web modernas, funcionales y responsivas utilizando tecnologías frontend.";
            document.querySelector("#btn-ver-proyectos").textContent = "Ver proyectos ->";
            document.querySelector("#btn-contacto").textContent = "Contactarme ✉";

            // Sección Sobre mí
            document.querySelector("#titulo-sobre-mi").textContent = "Sobre mí";
            document.querySelector("#txt-sobre-mi").innerHTML = "Soy desarrollador Frontend Junior, con pasión por crear páginas modernas y atractivas.<br>Me enfoco en escribir código limpio, aprender y convertir ideas en productos digitales.";

            // Sección Proyectos
            document.querySelector("#titulo-proyectos").textContent = "Proyectos";
            document.querySelector("#desc-proyectos").textContent = "Algunos proyectos que he desarrollado para practicar y mejorar mis habilidades.";
            document.querySelector("#desc-p1").textContent = "Plataforma web enfocada en mejorar la experiencia de búsqueda y compatibilidad laboral.";
            document.querySelector("#btn-p1-ver").textContent = "Ver proyecto";

            // Sección Habilidades
            document.querySelector("#titulo-habilidades").textContent = "Habilidades";

            // Sección Contacto
            document.querySelector("#titulo-contacto").textContent = "Contacto";
            document.querySelector("#txt-contacto-pregunta").textContent = "¿Tienes un proyecto en mente? Hablemos y trabajemos juntos.";
            document.querySelector("#btn-contactarme").textContent = "Contactarme ✉";

            // Pie de página
            document.querySelector("#txt-footer").textContent = "© 2026 Matias Santelices. Todos los derechos reservados.";
        }
    });

});