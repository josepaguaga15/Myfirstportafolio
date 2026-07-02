<script setup>
document.title = 'JAK Technologies - Proyectos';

const scrollTo = (section) => {
  document.getElementById(section)?.scrollIntoView({
    behavior: 'smooth'
  });
};

</script>

<template>
  <header>
   <nav class="Header-nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
    </nav>
    <nav class="Header-mobilenav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
    </nav>
  </header>

  <div class="projects-section">
    <h1>Projects</h1>
    <p>Here you can find some of my projects.</p>
    <div class="projects-container">
      <div class="project-card">
        
        
        <div class="project-preview">
          <img src="/public/images/project1.png" alt="Preview del proyecto" class="preview-img">
        </div>
        
        <div class="project-content">
          <div class="project-title-wrapper">
            <h3 class="project-title">Personal Portfolio</h3>
          </div>
          
          <p class="project-description">
            A personal portfolio website for a civil engineer, showcasing their skills, projects, and contact information.
          </p>
          
          <div class="project-tags">
           <span class="tag"><i class="ti ti-brand-php"></i> PHP</span>
          <span class="tag"><i class="ti ti-code"></i> Blade</span>
          <span class="tag"><i class="ti ti-brand-css3"></i> CSS3</span>
          </div>
        </div>
        
        <div class="project-footer">
          <a href="https://josepaguaga15.github.io/IngJosephPortafolio/" class="view-details" target="_blank">
            View website <i class="ti ti-arrow-right"></i>
          </a>
          <div class="footer-icons">
            <a href="https://josepaguaga15.github.io/IngJosephPortafolio/" target="_blank" aria-label="External Link"><i class="ti ti-external-link"></i></a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
  
  <footer class="site-footer">
    © 2026 Jose Paguaga · JAK Technologies
  </footer>
</template>

<style scoped>
@import "/src/components/projects.css";
</style>
