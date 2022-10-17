import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints'


let options = {
    strings: ['Food...', 'Drinks...'],
    typeSpeed: 300,
    backSpeed: 100,
    backDelay : 500,
    loop:true,
    loopCount:Infinity,
    showCursor: false,
  };
  
let typed = new Typed('.ani-text', options);

let toDown = {
    distance: '50px',
    origin: 'top',
    interval : 500,
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval : 500,
    duration:800,
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval : 500,
    duration:800,
};

ScrollReveal().reveal('.to-left', toLeft);

new Waypoint({
    element: document.getElementById('home-page'),
    handler: function(direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      oldNavLink.classList.remove("active");
      let currentNavLink = document.querySelector(`[href="#home"]`);
      currentNavLink.classList.add("active");
    }, 
    offset:"10%"
  });

let sections = ['about','services','menus','contact'];
sections.forEach((section)=>{
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
          let oldNavLink = document.querySelector(".nav-link.active");
          oldNavLink.classList.remove("active");
          let currentNavLink = document.querySelector(`[href="#${section}"]`);
          currentNavLink.classList.add("active");
        },
        // offset: 40 
      });


});
