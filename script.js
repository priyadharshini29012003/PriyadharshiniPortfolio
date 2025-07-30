const text = "passionate Software Developer";
let index = 0;
const speed = 100; // typing speed in ms

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("DOMContentLoaded", typeEffect);

  const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
    const form = document.getElementById('contactForm');
  const popup = document.getElementById('popup');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    popup.style.display = 'flex';
    form.reset();
  });

  function closePopup() {
    popup.style.display = 'none';
  }
  form.addEventListener('submit', function(e) {
  e.preventDefault();
  popup.style.display = 'flex';
  form.reset();
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // auto close in 3 seconds
});

  document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      if (section) {
        const offset = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTo = offset - (windowHeight / 2) + (sectionHeight / 2);
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      }
    });
  });