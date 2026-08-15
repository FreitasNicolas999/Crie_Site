/* =================================
   NAVBAR SCROLL
================================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
            "rgba(5,8,22,.75)";

        navbar.style.backdropFilter =
            "blur(20px)";

    }else{

        navbar.style.background =
            "transparent";

        navbar.style.backdropFilter =
            "none";

    }

});


/* =================================
   CONTADORES
================================= */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        const counter =
        entry.target;

        const target =
        Number(counter.dataset.target);

        let current = 0;

        const increment =
        target / 100;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                counter.innerText =
                Math.ceil(current);

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText =
                target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =================================
   SCROLL REVEAL
================================= */

const reveals =
document.querySelectorAll(
".card, .area-card, .about, .cta"
);

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(item => {
    revealObserver.observe(item);
});


/* =================================
   PARALLAX SUAVE
================================= */

const particlesBg =
document.querySelector(".particles");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    if(particlesBg){

        particlesBg.style.transform =
        `translateY(${y * 0.15}px)`;

    }

});


/* =================================
   BOTÕES MAGNÉTICOS
================================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect =
        btn.getBoundingClientRect();

        const x =
        e.clientX - 