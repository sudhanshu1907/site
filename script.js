document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileToggle.addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.body.classList.remove('menu-active');
      mobileMenu.classList.remove('active');
    });
  });
});

function handleSubmit() {
  // Handle form submission
  alert('Form submitted!');
}

