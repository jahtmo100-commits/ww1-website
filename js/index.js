document.addEventListener('DOMContentLoaded', function() {
  // Enhanced Accordion - allow multiple
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Smooth scroll for nav links (update selector for .nav-list a)
  document.querySelectorAll('.nav-list a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.nav-list');
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  }

  // Scroll progress bar
  const progress = document.querySelector('.progress');
  if (progress) {
    function updateProgress() {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progress.style.width = scrollPercent + '%';
    }
    window.addEventListener('scroll', updateProgress);
  }

  // Fade-in on scroll using IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  console.log('WO1 Enhanced JS loaded: animations, mobile, progress');
});
