const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const calendar = document.querySelector('#contribution-calendar');
const total = document.querySelector('#contribution-total');
const level = count => count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4;

function renderCalendar(days) {
  const fragment = document.createDocumentFragment();
  days.forEach(data => {
    const day = document.createElement('span');
    day.className = 'day';
    day.dataset.level = Number.isFinite(data.level) ? data.level : level(data.count);
    day.title = `${data.count} contribution${data.count === 1 ? '' : 's'} on ${data.date}`;
    fragment.append(day);
  });
  calendar.replaceChildren(fragment);
  calendar.setAttribute('aria-label', `GitHub contribution calendar showing ${days.length} days`);
}

function fallback() {
  const now = new Date();
  renderCalendar(Array.from({ length: 371 }, (_, index) => {
    const date = new Date(now);
    date.setDate(date.getDate() - (370 - index));
    return { date: date.toISOString().slice(0, 10), count: 0, level: 0 };
  }));
}

// Animated number ticker
function animateNumber(el, target, duration = 1200) {
  if (reduceMotion) { el.textContent = target.toLocaleString(); return; }
  const start = performance.now();
  const from = 0;
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (target - from) * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

fetch('https://github-contributions-api.jogruber.de/v4/RakheebShaik-web?y=last')
  .then(response => { if (!response.ok) throw new Error(); return response.json(); })
  .then(data => {
    if (!data.contributions?.length) throw new Error();
    renderCalendar(data.contributions);
    const sum = data.contributions.reduce((s, d) => s + d.count, 0);
    animateNumber(total, sum);
  })
  .catch(() => {
    fallback();
    animateNumber(total, 999);
  });

// System map animation
const map = document.querySelector('.system-map');
if (map) {
  map.addEventListener('click', () => {
    if (reduceMotion) return;
    map.classList.remove('is-running');
    void map.offsetWidth;
    map.classList.add('is-running');
    setTimeout(() => map.classList.remove('is-running'), 1300);
  });
}

// Cursor glow tracking
const heroWrap = document.querySelector('.hero-section-wrap');
const cursorGlow = document.querySelector('.cursor-glow');
if (heroWrap && cursorGlow && !reduceMotion) {
  heroWrap.addEventListener('mousemove', e => {
    const rect = heroWrap.getBoundingClientRect();
    cursorGlow.style.left = (e.clientX - rect.left) + 'px';
    cursorGlow.style.top = (e.clientY - rect.top) + 'px';
  });
  heroWrap.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

// Active section observer for dock navigation
const links = [...document.querySelectorAll('.dock-item')];
const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    const active = entries.find(entry => entry.isIntersecting);
    if (!active) return;
    links.forEach(link => {
      const selected = link.hash === `#${active.target.id}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-35% 0px -55%' });
  sections.forEach(section => navObserver.observe(section));
}

// Stagger reveal animations on scroll
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Apply stagger delay to timeline items
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.classList.add('stagger-reveal');
    item.style.transitionDelay = `${i * 100}ms`;
    revealObserver.observe(item);
  });

  // Apply stagger delay to project cards
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.classList.add('stagger-reveal');
    card.style.transitionDelay = `${i * 120}ms`;
    revealObserver.observe(card);
  });

  // Apply stagger delay to skill tags
  document.querySelectorAll('.skill-list span').forEach((tag, i) => {
    tag.classList.add('stagger-reveal');
    tag.style.transitionDelay = `${i * 40}ms`;
    revealObserver.observe(tag);
  });

  // Apply stagger delay to social buttons
  document.querySelectorAll('.social-buttons .button').forEach((btn, i) => {
    btn.classList.add('stagger-reveal');
    btn.style.transitionDelay = `${i * 80}ms`;
    revealObserver.observe(btn);
  });

  // Reveal hero elements immediately with stagger
  const heroChildren = document.querySelectorAll('#home > *:not(.cursor-glow)');
  heroChildren.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.animationDelay = `${i * 80}ms`;
  });
}

// Update year
document.querySelector('#year').textContent = new Date().getFullYear();
