/* =========================================================
   DARK MODE TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");
const rootHtml = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    rootHtml.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        const isDark = rootHtml.getAttribute("data-theme") === "dark";

        if (isDark) {
            rootHtml.removeAttribute("data-theme");
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "light");
        } else {
            rootHtml.setAttribute("data-theme", "dark");
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        }

    });
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, " +
    ".solution-card, " +
    ".certification-card, " +
    ".education-card, " +
    ".service-card, " +
    ".timeline-item, " +
    ".stat-card, " +
    ".contact-card"
);

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   SIMPLE TYPING EFFECT
========================================================= */

const typingElement =
    document.querySelector(".typing-text");

const typingWords = [

    "Oracle APEX & ERP Developer",
    "Oracle EBS R12 Developer",
    "SQL & PL/SQL Developer",
    "MIS & Reporting Professional"

];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentWord =
        typingWords[wordIndex];

    if (!deleting) {

        characterIndex++;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;
        }

    } else {

        characterIndex--;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                typingWords.length
            ) {

                wordIndex = 0;

            }

        }

    }

    const speed =
        deleting ? 40 : 70;

    setTimeout(
        typeEffect,
        speed
    );

}

typeEffect();


/* =========================================================
   PREVENT EMPTY # LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});