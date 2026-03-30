document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
    <!-- MAIN NAVBAR -->
    <nav class="fixed top-0 w-full z-40 bg-[#131313]/90 backdrop-blur-md shadow-lg border-b border-[#5b403d]/20 transition-all duration-300" id="main-nav">
        <div class="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
            <a href="index.html" class="text-xl md:text-2xl font-black italic text-[#d32f2f] uppercase font-headline tracking-tight hover:text-[#ffb3ac] transition-colors">
                MEGA TALLER
            </a>
            
            <!-- Desktop Layout -->
            <div class="hidden md:flex items-center space-gap-8 gap-8">
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="index.html">Inicio</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="servicios.html">Servicios</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="escuderia.html">La Escudería</a>
                <a class="text-[#e5e2e1] hover:text-[#ffb3ac] transition-colors font-headline tracking-tight nav-link" href="ubicacion.html">Ubicación</a>
            </div>
            
            <a href="https://wa.me/59177958263" target="_blank" class="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-headline font-bold uppercase tracking-widest text-sm hover:bg-[#ba1a20] transition-all active:scale-95 text-center">
                Agendar Cita
            </a>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-btn" class="md:hidden flex items-center justify-center text-on-surface hover:text-[#d32f2f] transition-colors p-2 outline-none">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </div>
    </nav>

    <!-- MOBILE OVERLAY -->
    <div id="mobile-menu-overlay" class="md:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#131313]/98 backdrop-blur-xl z-50 flex flex-col justify-center items-center -translate-y-full transition-transform duration-500 ease-out opacity-0 pointer-events-none">
        <!-- Close Button -->
        <button id="mobile-menu-close" class="absolute top-6 right-6 text-[#e5e2e1] hover:text-[#d32f2f] transition-colors p-2 outline-none">
            <span class="material-symbols-outlined text-4xl">close</span>
        </button>
        
        <div class="flex flex-col items-center gap-8 w-full px-8">
            <a class="text-3xl text-[#e5e2e1] hover:text-[#d32f2f] transition-colors font-headline font-black uppercase tracking-tight nav-link w-full text-center py-2 border-b border-[#353534]" href="index.html">Inicio</a>
            <a class="text-3xl text-[#e5e2e1] hover:text-[#d32f2f] transition-colors font-headline font-black uppercase tracking-tight nav-link w-full text-center py-2 border-b border-[#353534]" href="servicios.html">Servicios</a>
            <a class="text-3xl text-[#e5e2e1] hover:text-[#d32f2f] transition-colors font-headline font-black uppercase tracking-tight nav-link w-full text-center py-2 border-b border-[#353534]" href="escuderia.html">La Escudería</a>
            <a class="text-3xl text-[#e5e2e1] hover:text-[#d32f2f] transition-colors font-headline font-black uppercase tracking-tight nav-link w-full text-center py-2 border-b border-[#353534]" href="ubicacion.html">Ubicación</a>
            
            <a href="https://wa.me/59177958263" target="_blank" class="bg-primary-container text-on-primary-container px-10 py-4 mt-4 w-full rounded-md font-headline font-black uppercase tracking-widest text-lg shadow-[0px_8px_24px_rgba(211,47,47,0.3)] hover:scale-105 active:scale-95 transition-all outline-none text-center">
                AGENDAR CITA
            </a>
        </div>
    </div>
    `;

    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link[href="' + currentPage + '"]');
        links.forEach(link => {
            link.classList.add('text-[#d32f2f]', 'border-[#d32f2f]');
            link.classList.remove('text-[#e5e2e1]', 'border-[#353534]');
        });

        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-menu-close');
        const overlay = document.getElementById('mobile-menu-overlay');
        
        function openMenu() {
            overlay.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
            overlay.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            overlay.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
            overlay.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }

        if(mobileBtn && overlay && closeBtn) {
            mobileBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
        }
    }
});
