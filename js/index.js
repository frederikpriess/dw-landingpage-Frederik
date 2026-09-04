// slå dig løs her... 
import * as Data from './data.js'

/* Hero section */
const heroSection = document.querySelector(".hero")

/* hero container */
const heroContainer = document.createElement('div')
heroContainer.classList.add('hero-container')

/* Hero baggrund */
const heroImage = document.createElement('img')
heroImage.classList.add('hero-background')
heroImage.src = Data.hero.image
heroImage.alt = 'Hero Background'

/* hero text */
const heroCard = document.createElement('div')
heroCard.classList.add('hero-card')

const heroHeadline = document.createElement('h1')
heroHeadline.textContent = Data.hero.headline

const heroCopy = document.createElement('p')
heroCopy.textContent = Data.hero.copy
 /* button */
const heroButton = document.createElement('a')
heroButton.classList.add('hero-button')
heroButton.href = '#'

const buttonIcon = document.createElement('img');
buttonIcon.src = Data.hero.icon;
buttonIcon.alt = 'Globe icon';

const buttonText = document.createElement('span')
buttonText.textContent = 'Explore'

/* append hero container, card, image og button */
heroButton.append(buttonIcon, buttonText)
heroCard.append(heroHeadline, heroCopy, heroButton)
heroContainer.append(heroImage, heroCard)
heroSection.append(heroContainer)


/* service section */


//eksempel på at udskrive alle overskrifter i services i konsollen:
/* services.forEach(service => console.log(service.headline)) */
