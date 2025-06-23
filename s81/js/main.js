import { createNavbar }   from './navbar.js';
import { createHeader }   from './header.js';
import { createHero }     from './hero.js';
import { createCarousel } from './carousel.js';
import { createCards }    from './cards.js';
import { createFooter }   from './footer.js';

document.getElementById('navbar').innerHTML  = createNavbar();
document.getElementById('header').innerHTML  = createHeader();
document.getElementById('hero').innerHTML    = createHero();
document.getElementById('carousel').innerHTML = createCarousel();
document.getElementById('cards').innerHTML   = createCards();
document.getElementById('footer').innerHTML  = createFooter();
