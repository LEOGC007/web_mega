document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
    <nav class="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-md shadow-[0px_24px_48px_rgba(0,0,0,0.4)] transition-all duration-300" id="main-nav">
        <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <a href="index.html" class="text-2xl font-black italic text-[#d32f2f] uppercase font-headline tracking-tight hover:text-[#ffb3ac] transition-colors">
                MEGA TALLER
            </a>
            <div class="hidden md:flex items-center space-gap-8 gap-8">
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="index.html">Inicio</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="servicios.html">Servicios</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="escuderia.html">La Escudería</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="ubicacion.html">Ubicación</a>
            </div>
            <a href="https://wa.me/59177958263" target="_blank" class="bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-headline font-bold uppercase tracking-widest text-sm hover:bg-[#ba1a20] transition-all active:scale-95 inline-block text-center">
                Agendar Cita
            </a>
        </div>
    </nav>
    `;

    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('#main-nav .nav-link[href="' + currentPage + '"]');
        links.forEach(link => {
            link.classList.add('text-[#d32f2f]', 'border-b-2', 'border-[#d32f2f]', 'pb-1', 'font-bold');
            link.classList.remove('text-[#e5e2e1]');
        });
    }
});
