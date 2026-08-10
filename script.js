const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navButtons = document.querySelectorAll('[data-target]');
const form = document.getElementById('quote-form');
const statusText = document.querySelector('.form-status');
const heroImages = document.querySelectorAll('.hero-machine-image');
const heroProgressMarkers = document.querySelectorAll('.hero-stage-progress span');
const heroStageLabel = document.querySelector('.hero-stage-label');
const addressCopyButton = document.querySelector('.address-copy');
const addressCopyLabel = document.querySelector('.address-copy-label');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('open');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    statusText.textContent = 'Please complete all required fields.';
    return;
  }

  statusText.textContent = 'Thanks. Your quote request has been captured.';
  form.reset();
});

if (addressCopyButton) {
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

if (heroImages.length > 1) {
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
