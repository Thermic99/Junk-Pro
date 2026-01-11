// The Junk Pros - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });

    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll('a:not(.mobile-dropdown-toggle)').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }

  // Mobile Dropdown Toggles
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const content = this.nextElementSibling;
      
      // Close other dropdowns
      mobileDropdownToggles.forEach(otherToggle => {
        if (otherToggle !== this) {
          otherToggle.classList.remove('active');
          otherToggle.nextElementSibling?.classList.remove('active');
        }
      });

      this.classList.toggle('active');
      content?.classList.toggle('active');
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const wasActive = faqItem.classList.contains('active');

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!wasActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Smooth Scrolling for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Header Scroll Effect
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
  });

  // Form Validation
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#dc3545';
        } else {
          field.style.borderColor = '';
        }
      });

      // Email validation
      const emailFields = this.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        if (field.value && !isValidEmail(field.value)) {
          isValid = false;
          field.style.borderColor = '#dc3545';
        }
      });

      // Phone validation
      const phoneFields = this.querySelectorAll('input[type="tel"]');
      phoneFields.forEach(field => {
        if (field.value && !isValidPhone(field.value)) {
          isValid = false;
          field.style.borderColor = '#dc3545';
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields correctly.');
      }
    });

    // Clear error styling on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      });
    });
  });

  // Quote Option Selection
  const quoteOptions = document.querySelectorAll('.quote-option');

  quoteOptions.forEach(option => {
    option.addEventListener('click', function() {
      const action = this.dataset.action;

      if (action === 'call') {
        window.location.href = 'tel:+18302854281';
      } else if (action === 'text') {
        const message = encodeURIComponent('Hi! I would like a quote for junk removal. [Please describe your items or attach photos]');
        window.location.href = `sms:+18302854281&body=${message}`;
      } else if (action === 'instant') {
        document.getElementById('instant-quote-form')?.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'onsite') {
        document.getElementById('onsite-form')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lazy Loading Images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  }

});

// Helper Functions
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^[\d\s\-\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Track Conversions (placeholder for analytics)
function trackConversion(action) {
  console.log('Conversion tracked:', action);
  // Add Google Analytics or other tracking here
  // gtag('event', 'conversion', { 'send_to': 'AW-XXXXX/XXXXX', 'value': 1.0, 'currency': 'USD' });
}

// Call tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', function() {
    trackConversion('phone_call');
  });
});

// Form submission tracking
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function() {
    trackConversion('form_submission');
  });
});
