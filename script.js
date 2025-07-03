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

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const isActive = faqItem.classList.contains('active');

                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
                    answer.classList.add('active');
                    
                    // Smooth scroll to item
                    setTimeout(() => {
                        faqItem.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }, 200);
                }
            });
        });

        // Read more button functionality
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Here you can add navigation to specific pages
                // For now, it just shows an alert
                const faqItem = this.closest('.faq-item');
                const question = faqItem.querySelector('h3').textContent;
                
                // You can replace this with actual navigation
                console.log(`Navigating to more info about: ${question}`);
            });
        });

        // Scroll progress indicator
        window.addEventListener('scroll', function() {
            const scrollProgress = document.getElementById('scrollProgress');
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollable) * 100;
            
            scrollProgress.style.height = progress + '%';
        });

        // Smooth scrolling for CTA button
        document.querySelector('.cta-btn').addEventListener('click', function(e) {
            e.preventDefault();
            // Add your navigation logic here
            console.log('Navigating to contact section');
        });

        // Add entrance animation when page loads
        window.addEventListener('load', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 150);
            });
        });
