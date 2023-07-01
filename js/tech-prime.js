let map = document.querySelector('.map__svg');

document.addEventListener('DOMContentLoaded', () => {
   if (window.innerWidth <= 768) {
      map.src = 'images/tech-prime-map-mini.svg';
   }
   otherGenerator.style.backgroundColor = '#bd2738';
   otherGeneratorText.style.color = '#fff';
})








let burger = document.querySelector('.header__upper-div-up-burger');
let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup-close-ico');


burger.addEventListener('click', () => {
   popup.classList.add('popup-active');
   popupBg.classList.add('popup-active');
})

document.addEventListener('click', (e) => {
   if (e.target === popupBg) {
      popupBg.classList.remove('popup-active');
      popup.classList.remove('popup-active');
   }
})

closePopupButton.addEventListener('click', () => {
   popupBg.classList.remove('popup-active');
   popup.classList.remove('popup-active');
})

const khabarovsk = document.querySelector('#khabarovsk');
const krasnodar = document.querySelector('#krasnodar');
const moskow = document.querySelector('#moskow');

const khbNombers = document.querySelectorAll('.contacts__tab-flex-item-nomber-khb');

const otherGenerator = document.querySelector('.generator__flex-item-btn1');
const ourGenerator = document.querySelector('.generator__flex-item-btn2');
const otherGeneratorText = document.querySelector('.generator__flex-item-btn1-text');
const ourGeneratorText = document.querySelector('.generator__flex-item-btn2-text');

otherGenerator.addEventListener('click', () => {
   otherGenerator.style.backgroundColor = '#bd2738';
   otherGeneratorText.style.color = '#fff';

   ourGenerator.style.backgroundColor = '#fff';
   ourGeneratorText.style.color = '#bd2738';
})

ourGenerator.addEventListener('click', () => {
   ourGenerator.style.backgroundColor = '#bd2738';
   ourGeneratorText.style.color = '#fff';

   otherGenerator.style.backgroundColor = '#fff';
   otherGeneratorText.style.color = '#bd2738';
})


document.addEventListener('DOMContentLoaded', () => {
   khabarovsk.style.color = '#bd2738';
   khabarovsk.style.textDecoration = 'underline';
   khabarovsk.style.fontWeight = '500';

   if (window.height < 14000) {
      window.style.transition = '.3s'
   }
})

khabarovsk.addEventListener('click', () => {
   khabarovsk.style.color = '#bd2738';
   khabarovsk.style.textDecoration = 'underline';
   khabarovsk.style.fontWeight = '500';

   krasnodar.style.color = '#a3a3a3';
   krasnodar.style.textDecoration = 'none';
   krasnodar.style.fontWeight = '400';

   moskow.style.color = '#a3a3a3';
   moskow.style.textDecoration = 'none';
   moskow.style.fontWeight = '400';

   khbNombers.forEach((e) => {
      e.style.opacity = '1';
      e.style.display = 'block'
   })
})

krasnodar.addEventListener('click', () => {
   krasnodar.style.color = '#bd2738';
   krasnodar.style.textDecoration = 'underline';
   krasnodar.style.fontWeight = '500';

   khabarovsk.style.color = '#a3a3a3';
   khabarovsk.style.textDecoration = 'none';
   khabarovsk.style.fontWeight = '400';

   moskow.style.color = '#a3a3a3';
   moskow.style.textDecoration = 'none';
   moskow.style.fontWeight = '400';

   khbNombers.forEach((e) => {
      e.style.opacity = '1';
      e.style.display = 'none'
   })
})

moskow.addEventListener('click', () => {
   moskow.style.color = '#bd2738';
   moskow.style.textDecoration = 'underline';
   moskow.style.fontWeight = '500';

   khabarovsk.style.color = '#a3a3a3';
   khabarovsk.style.textDecoration = 'none';
   khabarovsk.style.fontWeight = '400';

   krasnodar.style.color = '#a3a3a3';
   krasnodar.style.textDecoration = 'none';
   krasnodar.style.fontWeight = '400';

   khbNombers.forEach((e) => {
      e.style.opacity = '1';
      e.style.display = 'none'
   })
})