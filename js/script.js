const homeImages = [
  "images/home-1.jpg",
  "images/home-2.jpg",
  "images/home-3.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("slider-image");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.2, // 20% of section must be visible
  }
);

sections.forEach((section) => {
  section.classList.add("hidden"); // start hidden
  observer.observe(section);
});

function showImage(index) {
  imgElement.src = homeImages[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + homeImages.length) % homeImages.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % homeImages.length;
  showImage(currentIndex);
}

// Event listeners
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");

  // Change icon (menu ↔ close)
  if (navList.classList.contains("active")) {
    navToggle.setAttribute("name", "close-outline");
  } else {
    navToggle.setAttribute("name", "menu-outline");
  }
});

const slides = document.querySelectorAll(".slide");
prevBtn = document.getElementById("prev-btn");
nextBtn = document.getElementById("next-btn");
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Init
showSlide(current);

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const userId = document.getElementById("user_id").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (userId === "KSGEC" && password === "211") {
    // correct login
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    // incorrect
    errorMsg.textContent = "Incorrect User ID or Password";
  }
});
