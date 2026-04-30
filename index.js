
  // Nav scroll shadow
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .timeline-item, .project-card').forEach(el => observer.observe(el));

  // Skill chips stagger
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chips = entry.target.querySelectorAll('.skill-chip');
        chips.forEach((chip, i) => {
          setTimeout(() => chip.classList.add('visible'), i * 80);
        });
        skillObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  const grid = document.getElementById('skillsGrid');
  if (grid) skillObs.observe(grid);

  // Project cards stagger
  const projObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 120);
        });
        projObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  const projGrid = document.querySelector('.projects-grid');
  if (projGrid) projObs.observe(projGrid);

  // Download resume
  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Ruzette Go CV.pdf';
    link.download = 'Ruzette_Go_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Send message
  function sendMessage() {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const msg = document.getElementById('fmessage').value.trim();
    if (!name || !email || !msg) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    const formFields = document.querySelectorAll('.form-group, .form-row, .btn-send, .form-title');
    formFields.forEach(el => el.style.display = 'none');
    const success = document.getElementById('formSuccess');
    success.style.display = 'flex';
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--purple-600)';
    });
  });
