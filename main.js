
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
    const educolor = document.querySelector('.education');
    educolor.addEventListener('click', function () {
        document.getElementsByClassName('stick').setAttribute('background', 'green');
    });