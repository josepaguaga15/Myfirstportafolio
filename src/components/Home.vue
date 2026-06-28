<script setup>
document.title = 'JAK Technologies - Jose Paguaga';

const telefono = "+50582363237";
const message = "Hola, Estoy interesado en sus servicios.";

const sendmessage = () => {
  const mensajeCodificado = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;
  window.open(link, '_blank');
}

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'Jose_Paguaga_CV.pdf';
  link.click();
}

const scrollTo = (section) => {
  document.getElementById(section)?.scrollIntoView({
    behavior: 'smooth'
  });
};

</script>

<template>
  <header>
    <nav class="Header-nav">
      <a href="/" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#skills" class="nav-link">Skills</a>
    </nav>
    <nav class="Header-mobilenav">
      <a href="/" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#skills" class="nav-link">Skills</a>
    </nav>
  </header>

  <div class="hero">
    <div class="hero-left">
      <h1>Hello, I'm Jose</h1>
      <h4>Engineer majoring in web development</h4>
      <span class="badge">JAK Technologies</span>
      <button class="contactbutton" @click="sendmessage">
       <i class="ti ti-brand-whatsapp"></i>
        Contact me
      </button>
    </div>
    <div class="hero-right">
      <img class="myphoto" src="/images/ProfilePhoto.png" alt="Profile photo">
    </div>
  </div>

  <hr class="divider">

  <section class="about-section">
    <h2 id="about">About Me</h2>
    <div class="about-grid">
      <img class="about-img" src="/images/myphoto2.png" alt="Jose Paguaga">
      <div class="about-text">
        <h3>Jose Paguaga</h3>
        <p>Motivated Junior Frontend Developer skilled in HTML, CSS, JavaScript, and responsive design. Focused on building clean, user-friendly interfaces, with experience in React and Git. Strong problem-solver, team player, and eager to keep learning and improving.</p>
        <h3>| Education</h3>
        <p>Universidad Nacional Autónoma de Nicaragua</p>
        <p class="edu-sub">Bachelor of Engineering in Web Development and Digital Marketing</p>
        <p>Harvard Online (Remote)</p>
        <p class="edu-sub">HarvardX: CS50's Introduction to Computer Science</p>
        <button class="cvbutton" @click="downloadCV">
          <svg class="dl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </button>
      </div>
    </div>
  </section>

  <hr class="divider">

  <section class="skills-section">
    <h2 id="skills">Skills</h2>
    <div class="skills-grid">

      <div class="skill-card">
        <i class="ti ti-brand-html5"></i>
        <span>HTML5</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-css3"></i>
        <span>CSS3</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-javascript"></i>
        <span>JavaScript</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-vue"></i>
        <span>Vue.js</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-git"></i>
        <span>Git</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-laravel"></i>
        <span>Laravel</span>
      </div>

      <div class="skill-card">
        <i class="ti ti-brand-php"></i>
        <span>PHP</span>
      </div>

    </div>
  </section>

  <footer class="site-footer">
    © 2025 Jose Paguaga · JAK Technologies
  </footer>
</template>

<style scoped>
@import "./Home.css";
</style>