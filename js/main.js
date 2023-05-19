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

    krasnodar.style.color = '#a3a3a3';
    krasnodar.style.textDecoration = 'none';

    moskow.style.color = '#a3a3a3';
    moskow.style.textDecoration = 'none';

    khbNombers.forEach((e) => {
        e.style.opacity = '1';
        e.style.display = 'block'
    })
})

krasnodar.addEventListener('click', () => {
    krasnodar.style.color = '#216DFF';
    krasnodar.style.textDecoration = 'underline';

    khabarovsk.style.color = '#a3a3a3';
    khabarovsk.style.textDecoration = 'none';

    moskow.style.color = '#a3a3a3';
    moskow.style.textDecoration = 'none';

    khbNombers.forEach((e) => {
        e.style.opacity = '1';
        e.style.display = 'none'
    })
})

moskow.addEventListener('click', () => {
    moskow.style.color = '#216DFF';
    moskow.style.textDecoration = 'underline';

    khabarovsk.style.color = '#a3a3a3';
    khabarovsk.style.textDecoration = 'none';

    krasnodar.style.color = '#a3a3a3';
    krasnodar.style.textDecoration = 'none';

    khbNombers.forEach((e) => {
        e.style.opacity = '1';
        e.style.display = 'none'
    })
})






