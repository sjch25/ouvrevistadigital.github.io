// JavaScript para mostrar/ocultar secciones con scroll suave
        function mostrarSeccion(id) {
            const secciones = document.querySelectorAll('section');
            secciones.forEach(sec => sec.style.display = 'none');
            document.getElementById(id).style.display = 'block';
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Manejar el formulario de contacto (simulado)
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
            this.reset();
        });
