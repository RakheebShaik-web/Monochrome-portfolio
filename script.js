const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  window.addEventListener('pointermove', event => {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }, { passive: true });
}
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

fetch('https://github-contributions-api.jogruber.de/v4/RakheebShaik-web?y=last')
  .then(response => { if (!response.ok) throw new Error(); return response.json(); })
  .then(data => {
    if (!data.contributions?.length) throw new Error();
    renderCalendar(data.contributions);
    total.textContent = data.contributions.reduce((sum, day) => sum + day.count, 0).toLocaleString();
  })
  .catch(fallback);

const links = [...document.querySelectorAll('.dock-item')];
const sections = links.map(link => {
  const href = link.getAttribute('href');
  if (href.startsWith('#')) return document.querySelector(href);
  return null;
}).filter(Boolean);

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    const active = entries.find(entry => entry.isIntersecting);
    if (!active) return;
    links.forEach(link => {
      const selected = link.getAttribute('href') === `#${active.target.id}`;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-35% 0px -55%' });
  sections.forEach(section => navObserver.observe(section));
}

if (!reduceMotion) {
  [...document.querySelectorAll('#hero-section > *, .contribution-section, .work-section, .social-block, .projects, footer')].forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(8px)';
    element.style.transition = `opacity 0.5s ${index * 60}ms, transform 0.5s ${index * 60}ms cubic-bezier(0.2,0.8,0.2,1)`;
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
