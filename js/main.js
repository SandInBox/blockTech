const khabarovsk = document.querySelector('#khabarovsk');
const krasnodar = document.querySelector('#krasnodar');
const moskow = document.querySelector('#moskow');

const khbNombers = document.querySelectorAll('.contacts__tab-flex-item-nomber-khb');

document.addEventListener('DOMContentLoaded', () => {
    khabarovsk.style.color = '#216DFF';
    khabarovsk.style.textDecoration = 'underline';

    if(window.height < 14000) {
        window.style.transition = '.3s'
    }
})

khabarovsk.addEventListener('click', () => {
    khabarovsk.style.color = '#216DFF';
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
    krasnodar.style.color = '#216DFF';
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
    moskow.style.color = '#216DFF';
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






