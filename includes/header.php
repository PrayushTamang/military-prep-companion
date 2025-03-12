
<?php
// Start session for potential user authentication
session_start();

// Page title and metadata defaults
$pageTitle = $pageTitle ?? 'Military Prep Companion';
$pageDescription = $pageDescription ?? 'Prepare for military selection with personalized guidance, resources, and training programs tailored to your goals.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $pageTitle; ?></title>
  <meta name="description" content="<?php echo $pageDescription; ?>">
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
            <li class="navbar-nav-item"><a href="index.php" class="navbar-nav-link">Home</a></li>
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
          <li><a href="index.php" class="mobile-menu-link">Home</a></li>
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
