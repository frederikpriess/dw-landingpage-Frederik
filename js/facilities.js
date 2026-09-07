/* link til data.js */
import { facilities } from './data.js'

export function renderFacilities() {

  const facilitiesHeadline = document.createElement('h2')
  facilitiesHeadline.textContent = facilities.headline

  // Container til de 4 facilitetskort
  const facilitiesContainer = document.createElement('div');
  facilitiesContainer.classList.add('facilities-container');
  facilitiesContainer.append(facilitiesHeadline)

  facilities.options.forEach(option => {
    let articleElement = document.createElement("article")
    articleElement.classList.add('facility-card');
    
    articleElement.innerHTML = `
<img src="${option.icon}" alt="${option.headline}">
<h3>${option.headline}</h3>
<p>${option.text}</p>
<a href="#"> Show me more</a>
`
facilitiesContainer.append(articleElement)
  });



  return facilitiesContainer
};




