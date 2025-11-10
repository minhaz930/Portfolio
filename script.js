document.addEventListener("DOMContentLoaded", () => {
  // ===== Current Year =====
  document.getElementById("year").textContent = new Date().getFullYear();

  // ===== Theme Toggle =====
  const themeBtn = document.getElementById("themeToggle");
  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    themeBtn.textContent = document.documentElement.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });

  // ===== Mobile Nav Toggle =====
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ===== Typing Effect =====
  const typedEl = document.getElementById("typed");
  const phrases = [
    "Hi, I'm Md. Minhaz Ahmad",
    "Web Developer",
    "Full Stack Enthusiast",
  ];
  let i = 0,
    j = 0,
    forward = true;

  function typeEffect() {
    if (forward) {
      j++;
      if (j === phrases[i].length + 1) {
        forward = false;
        setTimeout(typeEffect, 800);
        return;
      }
    } else {
      j--;
      if (j === 0) {
        forward = true;
        i = (i + 1) % phrases.length;
      }
    }
    typedEl.textContent = phrases[i].substring(0, j);
    setTimeout(typeEffect, 120);
  }
  typeEffect();

  // ===== Contact Form =====
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please fill out all fields.";
      msg.style.color = "red";
      return;
    }

    msg.style.color = "green";
    msg.textContent = "Opening your mail client...";

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:minhazahmad8402612@gmail.com?subject=${subject}&body=${body}`;
  });
});
