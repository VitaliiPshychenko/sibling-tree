const tree = document.querySelector('.tree');

tree.addEventListener('click', event => {
  const target = event.target;

   if (target.tagName === 'SPAN') {
    target.nextElementSibling.classList.toggle('hidden');
  }
})
