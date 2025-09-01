
 document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function() {
  const words = [
    "Frontend Developer",
    "Web Designer",
    "Freelancer",
    "HTML & CSS Expert",
    "JavaScript Enthusiast",
    "IOT",
    "Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 120 : 180;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 1200; 
    }

    if (isDeleting && charIndex === 1) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }

  type();
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // حفظ الاختيار في localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  });
