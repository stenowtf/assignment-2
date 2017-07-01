import oneData from './data/one.json';
import twoData from './data/two.json';
import threeData from './data/three.json';

const randomInterval = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export default {
  fakeAJAXCall: (name) => {
    if (name === 'one') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(oneData);
        }, randomInterval(200, 500));
      });
    } else if (name === 'two') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(twoData);
        }, randomInterval(200, 500));
      });
    } else if (name === 'three') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(threeData);
        }, randomInterval(200, 500));
      });
    }
  },
  formatResult: (data) => {
    const { name, details, source, images, references } = data;

    const infoHTML = `
      <h3>
        <a href="${ source }">${ name }</a>
      </h3>
      <p>${ details }</p>
    `;

    const imagesHTML = images.map((image) => `
      <img src="${ image }" alt="" />
    `).join('');

    const referencesListHTML = references.map((reference) => `
      <li>
        <a href="${ reference.url }">
          ${ reference.title }
        </a>
      </li>
    `).join('');

    const referencesHTML = `
      <h5>References:</h5>
      <ul>
        ${ referencesListHTML }
      </ul>
    `;

    return infoHTML + imagesHTML + referencesHTML;
  },
};
