'use strict';

const tree = document.querySelector('.tree'),
  li = document.querySelectorAll('li');

for(const list of li) {
  const span = document.createElement('span');

  span.classList.add('show');
  list.prepend(span);
  span.append(span.nextSibling);
}

// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  if(event.target.tagName != 'SPAN') {
    return;
  }
            
  const childrenContainer = event.target.parentNode.querySelector('ul');
        
  if(!childrenContainer) {
    return;
  }
        
  childrenContainer.hidden = !childrenContainer.hidden;
});