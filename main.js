    //-------------------Nav Bar starts------------------------------
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('nav');
        if ($(window).width() >= 1024){
            nav.classList.toggle('abtNav', window.scrollY > 660);
        } else{
            nav.classList.toggle('abtNav', window.scrollY > 780);
        }
    });
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('nav');
        if ($(window).width() >= 1024) {
            nav.classList.toggle('eduNav', window.scrollY > 1270);
        } else {
            nav.classList.toggle('eduNav', window.scrollY > 1790);
        }
    });

    // const navColor = document.querySelector('nav ul li a');
    // if (window.scrollY >= 640) {
    //     navColor.setAttribute("color", "#2BAE66FF");
    //     } else if (($(window).width() >= 600) && (window.scrollY > 1270)) {
    //         navColor.setAttribute("color", "#E94B3CFF");
    //     } else if (($(window).width() >= 1024) && (window.scrollY > 1270)) {
    //         navColor.setAttribute("color", "#E94B3CFF");
    //     } else {
    //         navColor.setAttribute("color", "white");
    //     }
    //-------------------Nav Bar Ends--------------------------------


    //-----------------------Hamburger Starts------------------------
    const hamburger = document.querySelector('.toggle');
    const navlinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    const hme = document.querySelector('.hme');
    hme.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    const abt = document.querySelector('.abt');
    abt.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    const edu = document.querySelector('.edu');
    edu.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    const cont = document.querySelector('.cont');
    cont.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });

    const navs = document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click', () => {
        navs.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
    //-----------------------Hamburger Ends------------------------