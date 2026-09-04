/* link til data.js */
import { advantages } from './data.js'

export function renderAdvantages() {

  // Sektionens overskrift
  const advantagesHeadline = document.createElement('h2');
  advantagesHeadline.textContent = 'Our Advantages';

  // Container til de 3 kort
  const advantagesContainer = document.createElement('div');
  advantagesContainer.classList.add('advantages-container');

  advantagesContainer.innerHTML = `
<article class="advantage-card">
  <img src="${advantages.icon}" alt="${advantages.headline}">
  <h3>${advantages.headline}</h3>
  <p>${advantages.text}</p>
</article>
`
  return advantagesContainer
}
