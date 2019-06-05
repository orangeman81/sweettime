"use strict";

// navbarToggle
var menu = document.querySelector("#menu");
var nav = document.querySelector("#mainNavbar");
menu.onclick = function () {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
}