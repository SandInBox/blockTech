
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

document.addEventListener('DOMContentLoaded', () => {
   khabarovsk.style.color = '#7739FC';
   khabarovsk.style.textDecoration = 'underline';
   khabarovsk.style.fontWeight = '500';

   if (window.height < 14000) {
      window.style.transition = '.3s'
   }
})

khabarovsk.addEventListener('click', () => {
   khabarovsk.style.color = '#7739FC';
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
   krasnodar.style.color = '#7739FC';
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
   moskow.style.color = '#7739FC';
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

let viewBlock = document.querySelector('.solution__flex-view');
let viewBlockIco = document.querySelector('.solution__flex-view-ico');
let solutionCatalog = document.querySelector('.solution__catalog');
let solutionCatalogItem = document.querySelectorAll('.solution__catalog-item');
let solutionCatalogItemText = document.querySelectorAll('.solution__catalog-item-subtitle');
let solutionCatalogItemIco = document.querySelectorAll('.solution__catalog-item-ico');
let solutionCatalogItemBtn = document.querySelectorAll('.solution__catalog-item-btn');

viewBlock.addEventListener('click', () => {
   if(viewBlockIco.alt == 'view1') {
      viewBlockIco.src = '../images/catalog-view2.svg';
      viewBlockIco.alt = 'view2';

      solutionCatalog.style.display = 'flex';
      solutionCatalog.style.flexWrap = 'wrap';
      solutionCatalog.style.gap = '40px 40px';

      solutionCatalogItem.forEach((e) => {
         e.style.display = 'flex';
         e.style.height = '240px';
         e.style.position = 'relative';
         e.style.width = '1400px';
      })

      solutionCatalogItemText.forEach((e) => {
         e.style.position = 'absolute';
         e.style.left = '215px';
         e.style.top = '100px';
         e.style.width = '782px';
      })

      solutionCatalogItemIco.forEach((e) => {
         e.style.marginRight = '55px';
         e.style.position = 'relative';
         e.style.top = '20px';
      })

      solutionCatalogItemBtn.forEach((e) => {
         e.style.position = 'absolute';
         e.style.right= '0px';
         e.style.top = '110px';
      })
   }
   else if(viewBlockIco.alt == 'view2') {
      viewBlockIco.src = '../images/catalog-view1.svg';
      viewBlockIco.alt = 'view1';

      solutionCatalog.style.display = 'grid';
      solutionCatalog.style.flexWrap = 'nowrap';
      solutionCatalog.style.gap = '80px 40px';

      solutionCatalogItem.forEach((e) => {
         e.style.display = 'block';
         e.style.height = 'initial';
         e.style.position = 'initial';
         e.style.width = '680px';
      })

      solutionCatalogItemText.forEach((e) => {
         e.style.position = 'initial';
         e.style.left = 'initial';
         e.style.top = 'initial';
         e.style.width = 'initial';
      })

      solutionCatalogItemIco.forEach((e) => {
         e.style.marginRight = 'initial';
         e.style.position = 'initial';
         e.style.top = 'initial';
      })
      solutionCatalogItemBtn.forEach((e) => {
         e.style.position = 'initial';
         e.style.right= 'initial';
         e.style.top = 'initial';
      })
   }
})