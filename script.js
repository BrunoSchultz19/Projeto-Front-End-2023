let ul = document.querySelector('nav .ul');

function openMenu() {
  ul.classList.add('open');
}

function closeMenu() {
  ul.classList.remove('open');
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
