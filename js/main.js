document.addEventListener('DOMContentLoaded', () => {
    // === Scroll Animations (Intersection Observer) ===
    
    // Add .reveal class to main sections and content blocks
    const targetElements = document.querySelectorAll('section, .reveal-target');
    targetElements.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
    });

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealOnScroll.observe(el);
    });

    // === Navbar Scroll Effect ===
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(19, 19, 19, 0.85)';
                nav.classList.add('shadow-[0px_24px_48px_rgba(0,0,0,0.6)]');
            } else {
                nav.style.background = 'rgba(19, 19, 19, 0.6)';
                nav.classList.remove('shadow-[0px_24px_48px_rgba(0,0,0,0.6)]');
            }
        });
    }
});
