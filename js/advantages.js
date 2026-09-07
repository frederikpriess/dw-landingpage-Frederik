/* link til data.js */
import { advantages } from './data.js'

export function renderAdvantages() {

  // Sektionens overskrift
  const advantagesHeadline = document.createElement('h2');
  advantagesHeadline.textContent = 'Our Advantages';

  // Container til de 3 kort
  const advantagesContainer = document.createElement('div');
  advantagesContainer.classList.add('advantages-container');
  advantagesContainer.append(advantagesHeadline)

advantages.forEach(advantage => {
let articleElement = document.createElement("article")
    articleElement.classList.add('facility-card');

  articleElement.innerHTML = `
  <img src="${advantage.icon}" alt="${advantage.headline}">
  <h3>${advantage.headline}</h3>
  <p>${advantage.text}</p>

`
advantagesContainer.append(articleElement)
})

  return advantagesContainer
}
