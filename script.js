const typewriter = document.getElementById("typewriter");
const text = typewriter.textContent;
typewriter.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

type();

const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(el => observer.observe(el));
