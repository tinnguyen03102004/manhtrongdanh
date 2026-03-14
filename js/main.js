/**
 * ═══════════════════════════════════════════════════════════
 * MẠNH TRỌNG DANH - ARCHITECT
 * JavaScript: Interactions, Animations, Form Handling
 * ═══════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {
    initColumnEntrance();
    initHeaderScroll();
    initMobileMenu();
    initScrollReveal();
    initImageModal();
    initSmoothScroll();

});



/* ── Column Entrance Animation ── */
function initColumnEntrance() {
    const columns = document.querySelectorAll('.column');
    if (!columns.length) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Step 1: Add pre-animate class to hide columns
    columns.forEach(col => col.classList.add('column--pre-animate'));

    // Step 2: Trigger reflow, then remove the class to animate in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            columns.forEach(col => col.classList.remove('column--pre-animate'));
        });
    });
}

/* ── Header Hide/Show on Scroll ── */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.scrollY;

                if (currentScroll > lastScroll && currentScroll > 120) {
                    header.classList.add('header--hidden');
                } else {
                    header.classList.remove('header--hidden');
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ── Mobile Menu Toggle ── */
function initMobileMenu() {
    const toggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu on link click
    nav.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (!reveals.length) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Step 1: Add hidden class (content is visible by default without JS)
    reveals.forEach(el => el.classList.add('reveal--hidden'));

    // Step 2: Observe and reveal on intersection
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        }
    );

    reveals.forEach(el => observer.observe(el));
}

/* ── Image Modal / Lightbox ── */
function initImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalClose = document.querySelector('.modal-close');

    if (!modal || !modalImg) return;

    // Open modal on card image click
    document.querySelectorAll('.card__image-wrapper img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

/* ── Shake Animation (Validation) ── */
function shakeElement(el) {
    el.style.animation = 'none';
    el.offsetHeight; // Reflow
    el.style.animation = 'shake 0.4s ease-out';
}

/* ── Smooth Scroll for Nav Links ── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ── Shake Keyframe (injected) ── */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);
