const tree = document.getElementsByTagName('ul')[0];
const treeList = tree.getElementsByTagName('li');
const toggler = document.getElementsByTagName('span');

for (let i = 0; i < treeList.length; i++) {
  const li = treeList[i]; 
  const span = document.createElement('span');
  
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('nested');
  });
}