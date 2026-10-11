const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
const progress = document.querySelector('.scroll-progress');
let ticking = false;
function updateScroll() { const max = document.documentElement.scrollHeight - innerHeight; progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`; ticking = false; }
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateScroll); ticking = true; } }, { passive: true });
addEventListener('resize', updateScroll); updateScroll();
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
const projects = [{ title: 'Alpine — novas perspectivas', image: 'assets/photo-4.webp', description: 'Estudo conceitual de uma experiência digital inspirada no universo dos esportes de inverno. Fotografia, contraste e direção visual para uma presença marcante.' }, { title: 'Beyond — o próximo capítulo', image: 'assets/photo-8.webp', description: 'Estudo conceitual de interfaces para novas experiências. Cores imersivas e uma direção visual que explora a conexão entre pessoas e tecnologia.' }];
const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { const project = projects[Number(button.dataset.project)]; document.querySelector('#dialog-title').textContent = project.title; const image = document.querySelector('#dialog-image'); image.src = project.image; image.alt = project.title; document.querySelector('#dialog-description').textContent = project.description; dialog.showModal(); }));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) { const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', async event => { event.preventDefault(); const message = document.querySelector('#project-message').value.trim(); const status = document.querySelector('#contact-status'); if(message.length < 10) { status.textContent = 'Descreva sua ideia com pelo menos 10 caracteres.'; return; } try { await navigator.clipboard.writeText(message); status.textContent = 'Mensagem copiada! Cole no seu canal de contato preferido. O envio direto ainda precisa ser configurado.'; } catch { status.textContent = 'Sua mensagem está pronta. Selecione e copie o texto para enviar pelo seu canal preferido. O envio direto ainda precisa ser configurado.'; } });
