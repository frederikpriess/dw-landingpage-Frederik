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
// --- 2. SERVICES SECTION ---
const servicesSection = document.querySelector('.services');

const servicesContainer = document.createElement('div');
servicesContainer.classList.add('services-container');

// Ret fra Data til data med lille d
Data.services.forEach(function(service) {
  const serviceCard = document.createElement('article');
  serviceCard.classList.add('service-card');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('service-image-wrapper');

  const image = document.createElement('img');
  image.src = service.illustration;
  image.alt = service.headline;
  imageWrapper.append(image);

  const headline = document.createElement('h2');
  headline.textContent = service.headline;

  const text = document.createElement('p');
  text.textContent = service.text;

  const link = document.createElement('a');
  link.href = '#';
  link.textContent = service.linktext;

  // Ret fra ServiceCard til serviceCard med lille s
  serviceCard.append(imageWrapper, headline, text, link);
  servicesContainer.append(serviceCard);
});

servicesSection.append(servicesContainer);
//eksempel på at udskrive alle overskrifter i services i konsollen:
/* services.forEach(service => console.log(service.headline)) */
