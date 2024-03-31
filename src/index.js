import _ from 'lodash';
import moment from 'moment';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const dateElement = document.createElement('p');
  dateElement.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  element.appendChild(dateElement);

  const button = document.createElement('button');
  button.innerHTML = 'Click me and check the console!';
  element.appendChild(button);

  button.onclick = function() {
    import('./utils').then(module => {
      const result = module.add(1, 2);
      console.log('Result:', result);
    });
  };

  return element;
}

document.body.appendChild(component());
