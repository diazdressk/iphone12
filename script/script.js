document.addEventListener('DOMContentLoaded', () => {// js начнет работать только после загрузки html
  //дожидается загрузки домДерева
  'use strict';//не позволит запускать код,если в нём есть ошибки(если есть необъявленные переменные и тд)

  const tabs = () => {//табы,могу переключаться по объектам,которые внутри
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');//псевдомассивы
    // console.log(cardDetailChangeElems)
    const cardDetailsTitleElems = document.querySelectorAll('.card-details__title');
    const cardImageElems = document.querySelectorAll('.card__image');

    const hideAll = () => {//функция удаления класса activ
      for (let i = 0; i < cardDetailChangeElems.length; i += 1) {
        cardDetailChangeElems[i].classList.remove('active');
        cardDetailsTitleElems[i].classList.remove('active');
        cardImageElems[i].classList.remove('active');
      }
    };
    for (let i = 0; i < cardDetailChangeElems.length; i += 1) {
      hideAll();
      cardDetailChangeElems[i].addEventListener('click', () => {//функция добавления класса active
        hideAll();
        cardDetailChangeElems[i].classList.add('active');//добавляю класс active при нажатии
        cardDetailsTitleElems[i].classList.add('active');
        cardImageElems[i].classList.add('active');
      });
    }
  };
  tabs();
});