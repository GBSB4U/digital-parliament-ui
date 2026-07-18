/* =======================================
   GBSB4U Digital Parliament
   app.js v1.0
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Demo Statistics */
    animateCounter("citizens", 1250);
    animateCounter("proposals", 42);
    animateCounter("debates", 87);
    animateCounter("votes", 15430);

});

/* Counter Animation */

function animateCounter(id, target){

    const element = document.getElementById(id);

    if(!element) return;

    let value = 0;

    const speed = Math.max(1, Math.ceil(target/100));

    const timer = setInterval(()=>{

        value += speed;

        if(value >= target){

            value = target;

            clearInterval(timer);

        }

        element.textContent = value.toLocaleString();

    },20);

}

/* Dark Mode */

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}

/* Scroll To Top */

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* Welcome */

console.log("GBSB4U Digital Parliament Loaded Successfully");
