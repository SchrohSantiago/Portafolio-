import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;

if (!reduce) {
  gsap.from('.hero h1 .word', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.07, delay: 0.1 });
  gsap.from('.hero .badge, .hero .lead, .hero .cta', { opacity: 0, y: 24, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.7 });

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  const track = document.querySelector('.track');
  if (track) {
    track.innerHTML += track.innerHTML;
    gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
  }

  gsap.utils.toArray('.ring').forEach((r, i) => {
    gsap.to(r, { yPercent: (i + 1) * -18, ease: 'none',
      scrollTrigger: { trigger: '.feature', scrub: true } });
  });

  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () =>
      gsap.to(obj, { v: end, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('es-AR') + (el.dataset.suffix || ''); } }) });
  });

  if (fine) {
    const root = document.documentElement;
    addEventListener('pointermove', (e) => {
      root.style.setProperty('--mx', e.clientX + 'px');
      root.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });

    document.querySelectorAll('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 });
      });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
    });

    document.querySelectorAll('.card').forEach((c) => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(c, { rotateY: x * 10, rotateX: -y * 10, transformPerspective: 800, duration: 0.3 });
      });
      c.addEventListener('pointerleave', () => gsap.to(c, { rotateX: 0, rotateY: 0, duration: 0.5 }));
    });
  }
}
