/* link til data.js */
import {services} from './data.js'

export function renderServices() {

const servicesContainer = document.createElement('div');
servicesContainer.classList.add('services-container');

services.forEach(service => {
  
let articleElement = document.createElement("article")
articleElement.classList.add('service-card')

articleElement.innerHTML = `
<div class="service-image-wrapper">
<img src="${service.illustration}" alt="${service.headline}">
</div>

<h2>${service.headline}</h2>
<p>${service.text}</p>
<a href="#">${service.linktext}</a>
`
servicesContainer.append(articleElement)
}); 

return servicesContainer
}