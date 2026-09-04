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

/* Facilities */
const facilitiesSection = document.querySelector('.facilities')

const facilitiesHeadline = document.createElement('h2')
facilitiesHeadline.textContent = Data.facilities.headline

/* Container til kort */

// Container til de 4 facilitetskort
const facilitiesContainer = document.createElement('div');
facilitiesContainer.classList.add('facilities-container');

Data.facilities.options.forEach(function(option) {
  const card = document.createElement('article');
  card.classList.add('facility-card');

  const icon = document.createElement('img');
  icon.src = option.icon;
  icon.alt = option.headline;

  const headline = document.createElement('h3');
  headline.textContent = option.headline;

  const text = document.createElement('p');
  text.textContent = option.text;

  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Show me more';

  card.append(icon, headline, text, link);
  facilitiesContainer.append(card);
});

facilitiesSection.append(facilitiesHeadline, facilitiesContainer);


/* Sites Section */
const sitesSection = document.querySelector('.sites');

// Venstre side: Tekst og knap
const sitesInfo = document.createElement('div');
sitesInfo.classList.add('sites-info');

const sitesHeadline = document.createElement('h2');
sitesHeadline.textContent = Data.sites.headline;

const sitesText = document.createElement('p');
sitesText.textContent = Data.sites.text;

const sitesBtn = document.createElement('a');
sitesBtn.classList.add('sites-btn');
sitesBtn.href = '#';

const btnIcon = document.createElement('img');
btnIcon.src = Data.sites.btnicon;
btnIcon.alt = 'Arrow icon';

const btnText = document.createElement('span');
btnText.textContent = 'Start';

sitesBtn.append(btnIcon, btnText);
sitesInfo.append(sitesHeadline, sitesText, sitesBtn);

// Højre side: Billeder/steder i en container
const placesContainer = document.createElement('div');
placesContainer.classList.add('places-container');

Data.sites.places.forEach(function(place) {
  const placeCard = document.createElement('article');
  placeCard.classList.add('place-card');

  const img = document.createElement('img');
  img.src = place.img;
  img.alt = place.name;

  const name = document.createElement('h3');
  name.textContent = place.name;

  const city = document.createElement('p');
  city.textContent = place.city;

  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'View the Site';

  placeCard.append(img, name, city, link);
  placesContainer.append(placeCard);
});

// Tilføj både info-boks og places-container til .sites
sitesSection.append(sitesInfo, placesContainer);

/* Advantages Section */
const advantagesSection = document.querySelector('.advantages');

// Sektionens overskrift
const advantagesHeadline = document.createElement('h2');
advantagesHeadline.textContent = 'Our Advantages';

// Container til de 3 kort
const advantagesContainer = document.createElement('div');
advantagesContainer.classList.add('advantages-container');

Data.advantages.forEach(function(advantage) {
  const card = document.createElement('article');
  card.classList.add('advantage-card');

  const icon = document.createElement('img');
  icon.src = advantage.icon;
  icon.alt = advantage.headline;

  const headline = document.createElement('h3');
  headline.textContent = advantage.headline;

  const text = document.createElement('p');
  text.textContent = advantage.text;

  card.append(icon, headline, text);
  advantagesContainer.append(card);
});

advantagesSection.append(advantagesHeadline, advantagesContainer);