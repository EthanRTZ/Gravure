const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const chips = document.querySelectorAll('.chip');
if (chips.length) {
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

const contactForm = document.querySelector('.contact-form');
const feedback = document.querySelector('.form-feedback');

if (contactForm && feedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const requiredFields = ['company', 'email', 'material', 'details'];
    const missing = requiredFields.filter((field) => !data.get(field));

    if (missing.length) {
      feedback.textContent = 'Merci de renseigner tous les champs obligatoires.';
      feedback.style.color = '#f08b1d';
      return;
    }

    feedback.textContent = 'Votre demande a bien été transmise. Nous revenons vers vous sous 24h.';
    feedback.style.color = '#7dd87d';
    contactForm.reset();
  });
}

const animatedNodes = document.querySelectorAll('[data-anim]');
if (animatedNodes.length) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedNodes.forEach((node) => observer.observe(node));
  } else {
    animatedNodes.forEach((node) => node.classList.add('in-view'));
  }
}

