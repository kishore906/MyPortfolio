/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "light") {
  lightMode();
} else {
  darkMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "dark") {
    lightMode();
  } else {
    darkMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// overlay and Slider functionality
const overlayTriggers = document.querySelectorAll(".overlay-trigger");
const imageOverlay = document.getElementById("imageOverlay");
const closeOverlay = document.getElementById("closeOverlay");
const sliderInner = document.getElementById("sliderInner");
let currentSlide = 0;
let totalSlides = 0;

// image sets for each slider
const imageSets = {
  1: [
    "images/ecommerce/1.jpg",
    "images/ecommerce/2.jpg",
    "images/ecommerce/3.jpg",
    "images/ecommerce/4.jpg",
    "images/ecommerce/5.jpg",
    "images/ecommerce/6.jpg",
    "images/ecommerce/7.jpg",
    "images/ecommerce/8.jpg",
    "images/ecommerce/9.jpg",
    "images/ecommerce/10.jpg",
    "images/ecommerce/11.jpg",
    "images/ecommerce/12.jpg",
    "images/ecommerce/13.jpg",
    "images/ecommerce/14.jpg",
    "images/ecommerce/15.jpg",
    "images/ecommerce/16.jpg",
    "images/ecommerce/17.jpg",
    "images/ecommerce/18.jpg",
    "images/ecommerce/19.jpg",
    "images/ecommerce/20.jpg",
    "images/ecommerce/21.jpg",
    "images/ecommerce/22.jpg",
    "images/ecommerce/23.jpg",
    "images/ecommerce/24.jpg",
    "images/ecommerce/25.jpg",
    "images/ecommerce/26.jpg",
    "images/ecommerce/27.jpg",
    "images/ecommerce/28.jpg",
    "images/ecommerce/29.jpg",
    "images/ecommerce/30.jpg",
    "images/ecommerce/31.jpg",
    "images/ecommerce/32.jpg",
    "images/ecommerce/33.jpg",
    "images/ecommerce/34.jpg",
    "images/ecommerce/35.jpg",
    "images/ecommerce/36.jpg",
  ],
  2: [
    "images/quiz/1.png",
    "images/quiz/2.png",
    "images/quiz/3.png",
    "images/quiz/4.png",
    "images/quiz/5.png",
    "images/quiz/6.png",
    "images/quiz/7.png",
    "images/quiz/8.png",
    "images/quiz/9.png",
    "images/quiz/10.png",
    "images/quiz/11.png",
    "images/quiz/12.png",
    "images/quiz/13.png",
    "images/quiz/14.png",
    "images/quiz/15.png",
    "images/quiz/16.png",
    "images/quiz/17.png",
    "images/quiz/18.png",
    "images/quiz/19.png",
    "images/quiz/20.png",
    "images/quiz/21.png",
  ],
  3: [
    "images/job_portal/1.jpg",
    "images/job_portal/2.jpg",
    "images/job_portal/3.jpg",
    "images/job_portal/4.jpg",
    "images/job_portal/5.jpg",
    "images/job_portal/6.jpg",
    "images/job_portal/7.jpg",
    "images/job_portal/8.jpg",
    "images/job_portal/9.jpg",
    "images/job_portal/10.jpg",
    "images/job_portal/11.jpg",
    "images/job_portal/12.jpg",
    "images/job_portal/13.jpg",
    "images/job_portal/14.jpg",
    "images/job_portal/15.jpg",
    "images/job_portal/16.jpg",
    "images/job_portal/17.jpg",
    "images/job_portal/18.jpg",
    "images/job_portal/19.jpg",
    "images/job_portal/20.jpg",
    "images/job_portal/21.jpg",
    "images/job_portal/22.jpg",
    "images/job_portal/23.jpg",
    "images/job_portal/24.jpg",
    "images/job_portal/25.jpg",
    "images/job_portal/26.jpg",
    "images/job_portal/27.jpg",
  ],
  4: [
    "images/lms_project/1.jpg",
    "images/lms_project/2.jpg",
    "images/lms_project/3.jpg",
    "images/lms_project/4.jpg",
    "images/lms_project/5.jpg",
    "images/lms_project/6.jpg",
    "images/lms_project/7.jpg",
    "images/lms_project/8.jpg",
    "images/lms_project/9.jpg",
    "images/lms_project/10.jpg",
    "images/lms_project/11.jpg",
    "images/lms_project/12.jpg",
    "images/lms_project/13.jpg",
  ],
};

// functionality to dynamically load images into slider
const loadSliderImages = (images) => {
  sliderInner.innerHTML = "";
  images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.className = "w-full object-cover";
    sliderInner.appendChild(img);
  });
  totalSlides = images.length;
  showSlide(0);
};

// functionality to show specific slide
const showSlide = (index) => {
  currentSlide = (index + totalSlides) % totalSlides; // circular navigation
  const offset = -currentSlide * 100; // calculate percentage offset for slider
  sliderInner.style.transform = `translateX(${offset}%)`;
};

overlayTriggers.forEach((image) => {
  image.addEventListener("click", () => {
    const sliderId = image.getAttribute("data-slider-id");
    loadSliderImages(imageSets[sliderId]);
    imageOverlay.classList.remove("hidden");
  });
});

closeOverlay.addEventListener("click", () => {
  imageOverlay.classList.add("hidden");
});

imageOverlay.addEventListener("click", (e) => {
  if (e.target === imageOverlay) {
    imageOverlay.classList.add("hidden");
  }
});

// Slider controls
document.getElementById("nextSlide").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.getElementById("prevSlide").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const navbar = document.getElementById("navbar");
  const aTag = document.querySelectorAll("nav ul li a");
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const logo = document.getElementById("heading");

  if (this.scrollY >= 200) {
    navbar.classList.add("bg-primaryColor");
    aTag.forEach((item) => {
      item.classList.add("text-whiteColor");
    });

    themeToggle.classList.add("text-whiteColor");
    hamburger.classList.add("text-whiteColor");
    logo.classList.add("text-whiteColor");
  } else {
    navbar.classList.remove("bg-primaryColor");
    aTag.forEach((item) => {
      item.classList.remove("text-whiteColor");
    });

    themeToggle.classList.remove("text-whiteColor");
    hamburger.classList.remove("text-whiteColor");
    logo.classList.remove("text-whiteColor");
  }
};

window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "hero";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);
