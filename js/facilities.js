/* link til data.js */
import {facilities} from './data.js'

export function renderFacilities() {
/* Facilities */
const facilitiesSection = document.querySelector('.facilities')

const facilitiesHeadline = document.createElement('h2')
facilitiesHeadline.textContent = facilities.headline

/* Container til kort */

// Container til de 4 facilitetskort
const facilitiesContainer = document.createElement('div');
facilitiesContainer.classList.add('facilities-container');

facilities.options.forEach(function(option) {
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

}
