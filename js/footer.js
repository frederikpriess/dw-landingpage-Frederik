/* link til data.js */
import { footer } from './data.js'

export function renderFooter() {
  // Opretter selve footer-elementet (ligesom facilitiesContainer i facilities.js)
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');

  // Indsæt toppen og brand-sektionen
  const footerTop = document.createElement('div');
  footerTop.classList.add('footer-top');

  footerTop.innerHTML = `
    <div class="footer-brand">
      <h2>${footer.headline}</h2>
      <p>${footer.tagline}</p>
    </div>
  `;

  // Løb igennem kolonnerne med forEach (ligesom facilities.options.forEach)
  footer.columns.forEach(colData => {
    const colElement = document.createElement('div');
    colElement.classList.add('footer-col');

    let linksHTML = '';
    colData.links.forEach(linkText => {
      linksHTML += `<li><a href="#">${linkText}</a></li>`;
    });

    colElement.innerHTML = `
      <h3>${colData.title}</h3>
      <ul>
        ${linksHTML}
      </ul>
    `;

    footerTop.append(colElement);
  });

  // Indsæt bunden
  const footerBottom = document.createElement('div');
  footerBottom.classList.add('footer-bottom');

  let bottomLinksHTML = '';
  footer.bottomLinks.forEach(linkText => {
    bottomLinksHTML += `<li><a href="#">${linkText}</a></li>`;
  });

  footerBottom.innerHTML = `
    <p>${footer.copyright}</p>
    <ul class="bottom-links">
      ${bottomLinksHTML}
    </ul>
  `;

  // Saml det hele i footerContainer og returnér
  footerContainer.append(footerTop, footerBottom);

  return footerContainer;
}