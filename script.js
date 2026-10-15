const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navButtons = document.querySelectorAll('[data-target]');
const form = document.getElementById('quote-form');
const statusText = document.querySelector('.form-status');
const emailDraftLink = document.getElementById('quote-email-draft');
const heroImages = document.querySelectorAll('.hero-machine-image');
const heroProgressMarkers = document.querySelectorAll('.hero-stage-progress span');
const heroStageLabel = document.querySelector('.hero-stage-label');
const addressCopyButton = document.querySelector('.address-copy');
const addressCopyLabel = document.querySelector('.address-copy-label');

const closeMenu = () => {
  if (nav) nav.classList.remove('open');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
};

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  });
});

if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const fields = new FormData(form);
  const subject = `CNC machining enquiry - ${fields.get('company')}`;
  const body = [
    `Name: ${fields.get('name')}`,
    `Company: ${fields.get('company')}`,
    `Email: ${fields.get('email')}`,
    '',
    String(fields.get('details')),
    '',
    'Please attach any drawings or STEP files before sending.'
  ].join('\r\n');
  const emailUrl = `mailto:dowling.mechanicalsolutions@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailDraftLink.href = emailUrl;
  emailDraftLink.hidden = false;
  statusText.textContent = 'Your email draft is ready. Attach your drawings and press Send in your email app. If it did not open, use the prepared enquiry link above or email us directly. Your details have been kept in this form.';
  window.location.href = emailUrl;
});

if (addressCopyButton && addressCopyLabel) {
  const originalAddressLabel = addressCopyLabel.textContent;

  addressCopyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(addressCopyButton.dataset.address);
      addressCopyLabel.textContent = 'Address copied';
    } catch {
      addressCopyLabel.textContent = 'Copy unavailable';
    }

    setTimeout(() => {
      addressCopyLabel.textContent = originalAddressLabel;
    }, 1800);
  });
}

if (heroImages.length > 1 && heroImages.length === heroProgressMarkers.length && heroStageLabel) {
  let activeImageIndex = 0;

  setInterval(() => {
    heroImages[activeImageIndex].classList.remove('is-active');
    heroProgressMarkers[activeImageIndex].classList.remove('is-active');
    activeImageIndex = (activeImageIndex + 1) % heroImages.length;
    const activeImage = heroImages[activeImageIndex];

    activeImage.classList.add('is-active');
    heroProgressMarkers[activeImageIndex].classList.add('is-active');
    heroStageLabel.querySelector('span').textContent = activeImage.dataset.label;
    heroStageLabel.querySelector('strong').textContent = activeImage.dataset.title;
  }, 5000);
}
