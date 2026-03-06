// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hero slideshow with smooth transitions
let currentSlide = 0;
const slides = document.querySelectorAll('.hero__slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 6 seconds for better viewing
if (slides.length > 0) {
  setInterval(nextSlide, 6000);
}

// Preload images for smoother transitions
slides.forEach(slide => {
  const bgImage = slide.style.backgroundImage;
  if (bgImage) {
    const img = new Image();
    img.src = bgImage.slice(5, -2); // Extract URL from url("...")
  }
});

// Update copyright year
const yearSpan = document.getElementById('copyright-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe accommodation cards, features, and gallery items
document.querySelectorAll('.accommodation__card, .feature__item, .gallery__item, .info__item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add loading state
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
