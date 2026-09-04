/* link til data.js */
import {footer} from './data.js'

/* footer */
const footerSection = document.querySelector('.footer');


const footerTop = document.createElement('div');
footerTop.classList.add('footer-top');


const brandCol = document.createElement('div');
brandCol.classList.add('footer-brand');

const brandTitle = document.createElement('h2');
brandTitle.textContent = footer.headline;

const brandTagline = document.createElement('p');
brandTagline.textContent = footer.tagline;

brandCol.append(brandTitle, brandTagline);
footerTop.append(brandCol);


footer.columns.forEach(function(colData) {
  const col = document.createElement('div');
  col.classList.add('footer-col');

  const colTitle = document.createElement('h3');
  colTitle.textContent = colData.title;

  const linkList = document.createElement('ul');

  colData.links.forEach(function(linkText) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = linkText;
    li.append(a);
    linkList.append(li);
  });

  col.append(colTitle, linkList);
  footerTop.append(col);
});


const footerBottom = document.createElement('div');
footerBottom.classList.add('footer-bottom');

const copyright = document.createElement('p');
copyright.textContent = footer.copyright;

const bottomNav = document.createElement('ul');
bottomNav.classList.add('bottom-links');

footer.bottomLinks.forEach(function(linkText) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = linkText;
  li.append(a);
  bottomNav.append(li);
});

footerBottom.append(copyright, bottomNav);
