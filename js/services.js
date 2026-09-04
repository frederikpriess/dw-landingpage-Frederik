/* link til data.js */
import {services} from './data.js'

/* service section */

const servicesSection = document.querySelector('.services');

const servicesContainer = document.createElement('div');
servicesContainer.classList.add('services-container');


services.forEach(function(service) {
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

  serviceCard.append(imageWrapper, headline, text, link);
  servicesContainer.append(serviceCard);
});


