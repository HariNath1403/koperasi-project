const homeImages = [
  "images/home-1.jpg",
  "images/home-2.jpg",
  "images/home-3.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

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
