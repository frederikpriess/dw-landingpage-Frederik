import { renderHero } from './hero.js';
import { renderServices } from './services.js';
import { renderFacilities } from './facilities.js';
import { renderSites } from './sites.js';
import { renderAdvantages } from './advantages.js';
import { renderFooter } from './footer.js';

document.querySelector(".hero").append(renderHero())
document.querySelector('.services').append(renderServices()); 
document.querySelector(".facilities").append(renderFacilities())


document.querySelector(".advantages").append(renderAdvantages())
document.querySelector(".footer").append(renderFooter())





/* ↓↓ - Render metoder - ↓↓ */

renderHero();
renderServices();
renderFacilities();
renderSites();
renderAdvantages();
renderFooter();


/*  ↑↑ - Render metoder - ↑↑ */