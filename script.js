'use strict';

/**
 * Navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

navElemArr.forEach(button => {
    button.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

/**
 * Toggle navbar when clicking any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

/**
 * Header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
