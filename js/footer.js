document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-[#1c1b1b] w-full border-t border-[#5b403d]/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
            <div class="space-y-6">
                <img src="logo.png" alt="MEGA Taller" class="h-14 object-contain drop-shadow mb-4">
                <p class="text-[#e5e2e1]/60 font-body text-sm max-w-xs leading-relaxed">
                    Elevando los estándares de la ingeniería automotriz en Cochabamba. Tecnología, pasión y precisión en cada detalle.
                </p>
                <div class="flex gap-4">
                    <a class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-[#e5e2e1] hover:text-[#d32f2f] transition-all shadow-[0_0_15px_rgba(211,47,47,0)] hover:shadow-[0_0_15px_rgba(211,47,47,0.3)]" href="https://www.tiktok.com/@m.e.g.a.7?_r=1&_t=ZS-957kWpCOsN7" target="_blank" title="TikTok">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                    <h5 class="font-headline font-bold uppercase text-[#d32f2f] text-xs tracking-widest">Navegación</h5>
                    <ul class="space-y-2">
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="index.html">Inicio</a></li>
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="servicios.html">Servicios</a></li>
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="escuderia.html">Equipo de Taller</a></li>
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="ubicacion.html">Ubicación</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h5 class="font-headline font-bold uppercase text-[#d32f2f] text-xs tracking-widest">Legal</h5>
                    <ul class="space-y-2">
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="javascript:alert('Política de privacidad en desarrollo.')">Privacidad</a></li>
                        <li><a class="text-[#e5e2e1]/60 hover:text-[#d32f2f] font-manrope text-sm transition-colors" href="javascript:alert('Términos en desarrollo.')">Términos</a></li>
                    </ul>
                </div>
            </div>
            <div class="space-y-6">
                <h5 class="font-headline font-bold uppercase text-[#d32f2f] text-xs tracking-widest">Newsletter Técnico</h5>
                <p class="text-[#e5e2e1]/60 font-body text-sm">Suscríbete para recibir consejos de mantenimiento y actualizaciones de equipo.</p>
                <form class="flex">
                    <input class="bg-surface-container-high border-none text-[#e5e2e1] px-4 py-3 rounded-l-md w-full focus:ring-1 focus:ring-primary-container" placeholder="Email" type="email"/>
                    <button type="button" class="bg-primary-container text-on-primary-container px-4 py-3 rounded-r-md">
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
        </div>
        <div class="px-12 py-8 border-t border-outline-variant/10 text-center">
            <p class="text-[#e5e2e1]/40 font-manrope text-xs uppercase tracking-widest">© 2024 MEGA Taller. Ingeniería de Precisión.</p>
        </div>
    </footer>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
});
