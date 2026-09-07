    /* link til data.js */
    import {hero} from './data.js'

    export function renderHero() {

    /* hero container */
    const heroContainer = document.createElement('div')
    heroContainer.classList.add('hero-container')
    
    heroContainer.innerHTML = `
    <img class="hero-background" src="${hero.image}" alt="">
        <div class="hero-card">
        <h1> ${hero.headline}</h1>
        <p>${hero.copy}</p>
        <a href="#" class="hero-button">
            <img src="${hero.icon}" alt="globe icon"> Explore
        </a>
        </div>
    `  
        return heroContainer
    }