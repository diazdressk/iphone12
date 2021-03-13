document.addEventListener('DOMContentLoaded', () => {// js начнет работать только после загрузки html
  //дожидается загрузки домДерева
  'use strict';//не позволит запускать код,если в нём есть ошибки(если есть необъявленные переменные и тд)

  const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');//все элементы
    const cardDetailsTitleElem = document.querySelector('.card-details__title');//один заголовок
    const cardImageItemElem = document.querySelector('.card__image_item');
    const cardDetailsPriceElem = document.querySelector('.card-details__price');
    const descriptionMemory = document.querySelector('.description__memory');

    const data = [
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
        img: 'img/iPhone-graphite.png',
        price: 29990,
        memory: 128,
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 512GB Silver',
        img: 'img/iPhone-silver.png',
        price: 32990,
        memory: 512,
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 768GB Pacific Blue',
        img: 'img/iPhone-blue.png',
        price: 35990,
        memory: 768,
      },
    ];

    const deactive = () => {
      cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
    };
    cardDetailChangeElems.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {//если btn не содержит класс active
          deactive();
          btn.classList.add('active');
          cardDetailsTitleElem.textContent = data[i].name;
          cardImageItemElem.src = data[i].img;//добавляю атрибуты
          cardImageItemElem.alt = data[i].name;
          cardDetailsPriceElem.textContent = data[i].price + '₽';
          descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memory} ГБ`;
        }
      });
    })
  };
  tabs();
});