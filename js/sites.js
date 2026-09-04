/* link til data.js */
import {sites} from './data.js'

/* Sites Section */
const sitesSection = document.querySelector('.sites');

// Venstre side: Tekst og knap
const sitesInfo = document.createElement('div');
sitesInfo.classList.add('sites-info');

const sitesHeadline = document.createElement('h2');
sitesHeadline.textContent = sites.headline;

const sitesText = document.createElement('p');
sitesText.textContent = sites.text;

const sitesBtn = document.createElement('a');
sitesBtn.classList.add('sites-btn');
sitesBtn.href = '#';

const btnIcon = document.createElement('img');
btnIcon.src = sites.btnicon;
btnIcon.alt = 'Arrow icon';

const btnText = document.createElement('span');
btnText.textContent = 'Start';

sitesBtn.append(btnIcon, btnText);
sitesInfo.append(sitesHeadline, sitesText, sitesBtn);

// Højre side: Billeder/steder i en container
const placesContainer = document.createElement('div');
placesContainer.classList.add('places-container');

sites.places.forEach(function(place) {
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