/* link til data.js */
import { sites } from './data.js'

export function renderSites() {

  const sitesSection = document.createElement('section');
  sitesSection.classList.add('sites');

  // Venstre side: Tekst og knap opbygget med innerHTML
  const sitesInfo = document.createElement('div');
  sitesInfo.classList.add('sites-info');
  sitesInfo.innerHTML = `
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <a href="#" class="sites-btn">
      <img src="${sites.btnicon}" alt="Arrow icon">
      <span>Start</span>
    </a>
  `;

  // Højre side: Container til stederne
  const placesContainer = document.createElement('div');
  placesContainer.classList.add('places-container');

  sites.places.forEach(place => {
    let placeCard = document.createElement('article');
    placeCard.classList.add('place-card');

    placeCard.innerHTML = `
      <img src="${place.img}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.city}</p>
      <a href="#">View the Site</a>
    `;

    placesContainer.append(placeCard);
  });

  sitesSection.append(sitesInfo, placesContainer);

  return sitesSection;
}