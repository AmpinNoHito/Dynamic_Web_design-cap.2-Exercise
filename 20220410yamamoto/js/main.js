const hbg = document.querySelector('.js-hbg');
const drw = document.querySelector('.js-drw');

hbg.addEventListener('click', () =>{
  hbg.classList.toggle('is-active');
  drw.classList.toggle('is-shown');
});