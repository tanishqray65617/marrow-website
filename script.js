// Subtle Mouse Interaction for "Sketchy" lines
document.addEventListener('mousemove', (e) => {
    const lines = document.querySelectorAll('.divider-sketch');
    const mouseX = e.clientX / window.innerWidth;
    lines.forEach(line => {
        line.style.backgroundPositionX = `${mouseX * 20}px`;
    });
});

// Add random slight rotation to some elements for the "notebook" look
document.querySelectorAll('.bento-card').forEach(card => {
    const rot = (Math.random() - 0.5) * 2;
    card.style.transform = `rotate(${rot}deg)`;
});

// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Initialize Lenis for heavy smooth scrolling
const lenis = new Lenis({
  duration: 2.5, // Higher duration for heavier scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 0.5, // Reduce multiplier to make it feel heavier
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Setup requestAnimationFrame for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Smooth scrolling for anchor links using Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target !== '#') {
      e.preventDefault();
      lenis.scrollTo(target);
    }
  });
});
