// Shared particles + minor helpers for Roadmap pages
(function() {
  function ensureParticlesContainer() {
    if (document.getElementById('particles-js')) return;
    const div = document.createElement('div');
    div.id = 'particles-js';
    document.body.prepend(div);
  }

  function initParticles() {
    if (typeof particlesJS === 'undefined') return;
    particlesJS('particles-js', {
      particles: {
        number: { value: 130, density: { enable: true, value_area: 900 } },
        color: { value: '#dfe8ff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000' } },
        opacity: { value: 0.55, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.08, sync: false } },
        size: { value: 2.4, random: true, anim: { enable: true, speed: 1.6, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 160, color: '#7bd3ff', opacity: 0.35, width: 1 },
        move: { enable: true, speed: 0.7, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 3 } }
      },
      retina_detect: true
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    ensureParticlesContainer();
    initParticles();
  });
})();
