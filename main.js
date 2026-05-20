// Mobile nav toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// Floating particles in hero
const pc = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = Math.random() * 8 + 's';
  p.style.animationDuration = (6 + Math.random() * 6) + 's';
  p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
  pc.appendChild(p);
}

// Auto-resize Survey123 iframe to eliminate internal scrollbar
window.addEventListener('message', function(e) {
  if (!e.data || typeof e.data !== 'object') return;
  const event = e.data.event || '';
  if (event.startsWith('survey123:') && e.data.contentHeight) {
    const frame = document.getElementById('surveyFrame');
    if (frame) frame.style.height = (e.data.contentHeight + 80) + 'px';
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(r => observer.observe(r));

