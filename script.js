// Sahifa ochilganda animatsiya
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "section, article, .card, .project, .skill"
  );

  elements.forEach(el => {
    el.classList.add("reveal");
  });

  showElements();
});

function showElements() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showElements);


// Tugmalar uchun chiroyli effekt
document.querySelectorAll("button, .btn, a.button").forEach(button => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(.95)";

    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});


// Tashqi linklarni yangi oynada ochish
document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  if (
    href &&
    href.startsWith("http") &&
    !href.includes("sarvinozdev-tech.github.io")
  ) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});


// Sahifa yuklanganda kichik salomlashuv
console.log("✨ Sarvinoz portfolio ishga tushdi!");
