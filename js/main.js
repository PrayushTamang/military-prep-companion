
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle hamburger icon animation
      const hamburgerIcon = this.querySelector('.hamburger-icon');
      if (hamburgerIcon) {
        hamburgerIcon.classList.toggle('active');
      }
    });
  }
  
  // Navbar scroll effect
  const handleScroll = () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once on page load
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation on scroll (simple version)
  const animateElements = document.querySelectorAll('.animate-fade-up');
  
  const checkIfInView = () => {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  window.addEventListener('scroll', checkIfInView);
  checkIfInView(); // Run once on page load
  
  // Add active class to current navigation item
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav-link, .mobile-menu-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentLocation || 
        (currentLocation === '/' && linkPath === 'index.php') ||
        (linkPath !== 'index.php' && currentLocation.includes(linkPath))) {
      link.classList.add('active');
    }
  });
  
  // Mobile submenu toggle
  const mobileSubmenus = document.querySelectorAll('.mobile-submenu');
  
  mobileSubmenus.forEach(submenu => {
    const submenuToggle = submenu.querySelector('.mobile-menu-link');
    const submenuList = submenu.querySelector('ul');
    
    if (submenuToggle && submenuList) {
      submenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        submenuList.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
  });
});
