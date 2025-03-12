
<?php
// Start session for potential user authentication
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Military Prep Companion</title>
  <meta name="description" content="Prepare for military selection with personalized guidance, resources, and training programs tailored to your goals.">
  <meta property="og:image" content="/og-image.png">
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header id="navbar" class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a href="index.php" class="navbar-logo">
          <span class="navbar-logo-text">Military Prep Companion</span>
          <span class="navbar-logo-mobile">MPC</span>
        </a>
        
        <nav class="navbar-nav">
          <ul class="navbar-nav-list">
            <li class="navbar-nav-item"><a href="index.php" class="navbar-nav-link active">Home</a></li>
            <li class="navbar-nav-item"><a href="about.php" class="navbar-nav-link">About</a></li>
            <li class="navbar-nav-item"><a href="careers.php" class="navbar-nav-link">Careers</a></li>
            <li class="navbar-nav-item"><a href="eligibility.php" class="navbar-nav-link">Eligibility</a></li>
            <li class="navbar-nav-item dropdown">
              <a href="#" class="navbar-nav-link">Resources <span class="dropdown-icon">▼</span></a>
              <ul class="dropdown-menu">
                <li><a href="fitness.php">Fitness & Diet</a></li>
                <li><a href="study.php">Study Materials</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        
        <div class="navbar-buttons">
          <a href="login.php" class="btn btn-outline">Login</a>
          <a href="signup.php" class="btn btn-primary">Sign Up</a>
        </div>
        
        <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <span class="hamburger-icon"></span>
        </button>
      </div>
      
      <div id="mobile-menu" class="mobile-menu">
        <ul class="mobile-menu-list">
          <li><a href="index.php" class="mobile-menu-link active">Home</a></li>
          <li><a href="about.php" class="mobile-menu-link">About</a></li>
          <li><a href="careers.php" class="mobile-menu-link">Careers</a></li>
          <li><a href="eligibility.php" class="mobile-menu-link">Eligibility</a></li>
          <li class="mobile-submenu">
            <span class="mobile-menu-link">Resources</span>
            <ul>
              <li><a href="fitness.php">Fitness & Diet</a></li>
              <li><a href="study.php">Study Materials</a></li>
            </ul>
          </li>
        </ul>
        <div class="mobile-menu-buttons">
          <a href="login.php" class="btn btn-outline btn-block">Login</a>
          <a href="signup.php" class="btn btn-primary btn-block">Sign Up</a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background" style="background-image: url('https://images.unsplash.com/photo-1579912437766-7896df7847ce?q=80&w=1740&auto=format&fit=crop')">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-fade-up">Your Journey to Military Service Starts Here</h1>
          <p class="hero-subtitle animate-fade-up">Prepare for military selection with personalized guidance, resources, and training programs tailored to your goals.</p>
          <div class="hero-buttons animate-fade-up">
            <a href="eligibility.php" class="btn btn-secondary">
              Check Eligibility
              <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="careers.php" class="btn btn-outline-light">Explore Careers</a>
          </div>
        </div>
      </div>
      <div class="hero-bottom-fade"></div>
    </section>

    <!-- Services Section -->
    <section class="services py-section bg-light">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title animate-fade-up">How We Help</h2>
          <p class="section-description animate-fade-up">We provide comprehensive resources and tools to help you prepare for a successful military career.</p>
        </div>
        
        <div class="services-grid">
          <div class="feature-card animate-fade-up">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            </div>
            <h3 class="feature-title">Explore Military Careers</h3>
            <p class="feature-description">Discover various military roles, their requirements, and career paths available across different branches.</p>
            <a href="careers.php" class="feature-link">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="feature-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>

          <div class="feature-card animate-fade-up" style="animation-delay: 100ms;">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>
            </div>
            <h3 class="feature-title">Eligibility Assessment</h3>
            <p class="feature-description">Check if you meet the requirements for military service with our comprehensive eligibility checker.</p>
            <a href="eligibility.php" class="feature-link">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="feature-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>

          <div class="feature-card animate-fade-up" style="animation-delay: 200ms;">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
            </div>
            <h3 class="feature-title">Fitness & Diet Plans</h3>
            <p class="feature-description">Get personalized workout routines and diet plans to help you meet physical requirements.</p>
            <a href="fitness.php" class="feature-link">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="feature-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>

          <div class="feature-card animate-fade-up" style="animation-delay: 300ms;">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 class="feature-title">Study Materials</h3>
            <p class="feature-description">Access comprehensive study guides and practice tests to prepare for military entrance exams.</p>
            <a href="study.php" class="feature-link">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" class="feature-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title animate-fade-up">Why Choose Us</h2>
          <p class="section-description animate-fade-up">We've helped thousands of candidates successfully prepare for military selection with our comprehensive approach.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-item animate-fade-up">
            <div class="feature-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Expert Guidance</h3>
              <p class="feature-description">Our team includes former military personnel and recruitment specialists with firsthand knowledge of the selection process.</p>
            </div>
          </div>
          
          <div class="feature-item animate-fade-up" style="animation-delay: 100ms;">
            <div class="feature-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Tailored Programs</h3>
              <p class="feature-description">Personalized preparation plans based on your goals, current fitness level, and the specific branch you're applying to.</p>
            </div>
          </div>
          
          <div class="feature-item animate-fade-up" style="animation-delay: 200ms;">
            <div class="feature-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Proven Success</h3>
              <p class="feature-description">Over 85% of candidates who follow our complete preparation program successfully pass their military selection.</p>
            </div>
          </div>
          
          <div class="feature-item animate-fade-up" style="animation-delay: 300ms;">
            <div class="feature-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Community Support</h3>
              <p class="feature-description">Connect with others on the same journey and get motivation, tips, and support from our community of aspiring and current military personnel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials py-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title animate-fade-up">Success Stories</h2>
          <p class="section-description animate-fade-up">Hear from candidates who successfully prepared with our platform.</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card animate-fade-up">
            <p class="testimonial-text">"The personalized fitness plan helped me go from barely passing the physical requirements to exceeding them by a significant margin. I felt confident and prepared on selection day."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">
                <span>JD</span>
              </div>
              <div class="testimonial-info">
                <h4 class="testimonial-name">John D.</h4>
                <p class="testimonial-role">Marine Corps, Enlisted 2022</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card animate-fade-up" style="animation-delay: 100ms;">
            <p class="testimonial-text">"The study materials and practice tests were invaluable. I knew exactly what to expect on the ASVAB and scored well above what I needed for my desired role."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">
                <span>SM</span>
              </div>
              <div class="testimonial-info">
                <h4 class="testimonial-name">Sarah M.</h4>
                <p class="testimonial-role">Air Force, Officer Candidate 2023</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card animate-fade-up" style="animation-delay: 200ms;">
            <p class="testimonial-text">"I was initially unsure which military path was right for me. The career exploration tools helped me find a role that matched my skills and interests perfectly."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">
                <span>RJ</span>
              </div>
              <div class="testimonial-info">
                <h4 class="testimonial-name">Robert J.</h4>
                <p class="testimonial-role">Army, Specialist 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta py-section bg-light">
      <div class="container text-center">
        <h2 class="cta-title animate-fade-up">Ready to Begin Your Military Preparation Journey?</h2>
        <p class="cta-description animate-fade-up">Take the first step toward a successful military career today. Our comprehensive resources and guidance are here to support you every step of the way.</p>
        <div class="cta-buttons animate-fade-up">
          <a href="eligibility.php" class="btn btn-primary btn-large">
            Start Your Assessment
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <a href="about.php" class="btn btn-outline btn-large">Learn More About Us</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-info animate-fade-up">
          <h4 class="footer-title">Military Prep Companion</h4>
          <p class="footer-description">
            Helping aspiring military recruits prepare for selection with expert guidance,
            resources, and personalized training programs.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        
        <div class="footer-links animate-fade-up" style="animation-delay: 100ms;">
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-menu">
            <li><a href="index.php" class="footer-link">Home</a></li>
            <li><a href="about.php" class="footer-link">About Us</a></li>
            <li><a href="careers.php" class="footer-link">Military Careers</a></li>
            <li><a href="eligibility.php" class="footer-link">Eligibility Checker</a></li>
            <li><a href="fitness.php" class="footer-link">Fitness & Diet</a></li>
            <li><a href="study.php" class="footer-link">Study Materials</a></li>
          </ul>
        </div>
        
        <div class="footer-contact animate-fade-up" style="animation-delay: 200ms;">
          <h4 class="footer-title">Contact Us</h4>
          <ul class="contact-list">
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>123 Military Avenue, Training Camp, TC 12345</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>(123) 456-7890</span>
            </li>
            <li class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>info@militaryprepcompanion.com</span>
            </li>
          </ul>
        </div>
        
        <div class="footer-newsletter animate-fade-up" style="animation-delay: 300ms;">
          <h4 class="footer-title">Newsletter</h4>
          <p class="footer-description">
            Subscribe to our newsletter for the latest updates, tips and resources.
          </p>
          <form class="newsletter-form" action="newsletter.php" method="post">
            <input type="email" name="email" class="form-input" placeholder="Your email address" required>
            <button type="submit" class="btn btn-secondary btn-block">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          © <?php echo date("Y"); ?> Military Prep Companion. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
