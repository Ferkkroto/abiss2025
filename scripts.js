document.addEventListener('DOMContentLoaded', () => {
    const detalleBtn = document.getElementById('detalle-btn');
    const miCancion = document.getElementById('miCancion');

    // Inicia la canción si se está cargando en la página inicial
    if (!localStorage.getItem('musicPlaying')) {
        miCancion.play();
        localStorage.setItem('musicPlaying', 'true');
    }

    detalleBtn.addEventListener('click', () => {
        // Guarda el estado para que la música continúe en la siguiente página
        localStorage.setItem('musicPlaying', 'true');
        window.location.href = 'pagina1.html';
    });
});


