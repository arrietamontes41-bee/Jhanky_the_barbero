document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil responsive
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Envío del formulario de reservas directo a WhatsApp
    const bookingForm = document.getElementById('booking-form');
    const successMessage = document.getElementById('success-message');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;
            const barbero = document.getElementById('barbero').value;
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value;

            // Tu número de WhatsApp real con indicativo de Colombia (57)
            const telefonoWhatsApp = "573226916107";

            // Construir el mensaje formateado para WhatsApp
            const mensaje = `Hola, quiero confirmar una reserva en Barbería Élite:%0A` +
                            `- *Nombre:* ${nombre}%0A` +
                            `- *Servicio:* ${servicio}%0A` +
                            `- *Barbero:* ${barbero}%0A` +
                            `- *Fecha:* ${fecha}%0A` +
                            `- *Hora:* ${hora}`;

            // Ocultar formulario y mostrar mensaje de éxito temporal
            bookingForm.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Abrir WhatsApp automáticamente después de 1.5 segundos con los datos listos
            setTimeout(() => {
                window.open(`https://wa.me/${telefonoWhatsApp}?text=${mensaje}`, '_blank');
            }, 1500);
        });
    }
});