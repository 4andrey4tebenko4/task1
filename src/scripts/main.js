'use strict';

const tree = document.querySelector('.tree');
  
// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  if(event.target.tagName != 'LI') {
    return;
  }
                         
  if(event.target.children.length > 0) {
    event.target.children[0].hidden = !event.target.children[0].hidden;
  }

});