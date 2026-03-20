document.addEventListener('DOMContentLoaded', function() {
  // Accordion functionality for timeline
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains('open');
      
      // Close all others
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.remove('open');
      });
      
      // Toggle current
      if (!isOpen) {
        content.classList.add('open');
      }
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('nav a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('WW1 Index JS loaded');
});
