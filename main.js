$(document).ready(function() {
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('nav');
        nav.classList.toggle('stick', window.scrollY > 0);
    });

    //---------------------Hamburger------------------------
    const hamburger = document.querySelector('.toggle');
    const navlinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    //--------------------------------------------Nav Bar Starts--------------------------------------------
    // const navslide = () => {
    //     const hamburger = document.querySelector('.hamburger');
    //     const nav = document.querySelector('.nav-links');
    //     const navlinks = document.querySelectorAll('.nav-links li');

    //     hamburger.addEventListener('click', () => {
    //         //toggle nav
    //         nav.classList.toggle('nav-active');

    //         //Animate links
    //         navlinks.forEach((link, index) => {
    //             if (link.style.animation) {
    //                 link.style.animation = ''
    //             } else {
    //                 link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    //             }
    //         });
    //         //Burger Animation
    //         hamburger.classList.toggle('cross-bar');
    //     });
    // }

    // navslide();
    //--------------------------------------------Nav Bar Ends-----------------------------------------------
});