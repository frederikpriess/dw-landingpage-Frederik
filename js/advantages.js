/* link til data.js */
import {advantages} from './data.js'

/* Advantages Section */
const advantagesSection = document.querySelector('.advantages');

// Sektionens overskrift
const advantagesHeadline = document.createElement('h2');
advantagesHeadline.textContent = 'Our Advantages';

// Container til de 3 kort
const advantagesContainer = document.createElement('div');
advantagesContainer.classList.add('advantages-container');

advantages.forEach(function(advantage) {
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
