document.addEventListener('DOMContentLoaded', () => {// js начнет работать только после загрузки html
  // дожидается загрузки домДерева
  'use strict';// не позволит запускать код,если в нём есть ошибки(если есть необъявленные переменные и тд)

  const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');// все элементы
    const cardDetailsTitleElem = document.querySelector('.card-details__title');// один заголовок
    const cardImageItemElem = document.querySelector('.card__image_item');
    const cardDetailsPriceElem = document.querySelector('.card-details__price');
    const descriptionMemory = document.querySelector('.description__memory');
    const descriptionCamera = document.querySelector('.description__camera');

    const data = [
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
        img: 'img/iPhone-graphite.png',
        price: 29990,
        memory: 128,
        camera: '12/12/12',
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 512GB Silver',
        img: 'img/iPhone-silver.png',
        price: 32990,
        memory: 512,
        camera: '12/48/12',
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 768GB Pacific Blue',
        img: 'img/iPhone-blue.png',
        price: 35990,
        memory: 768,
        camera: '12/64/108',
      },
    ];

    const deactive = () => {
      cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
    };
    cardDetailChangeElems.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {// если btn не содержит класс active
          deactive();
          btn.classList.add('active');
          cardDetailsTitleElem.textContent = data[i].name;
          cardImageItemElem.src = data[i].img;// добавляю атрибуты
          cardImageItemElem.alt = data[i].name;
          cardDetailsPriceElem.textContent = data[i].price + '₽';
          descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memory} ГБ`;// меняю текстКонтент
          descriptionCamera.textContent = `Основная камера МПикс ${data[i].camera} LiDAR`;
        }
      });
    });
  };

  const accordion = () => {
    const characteristicsListElem = document.querySelector('.characteristics__list');
    const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

    // characteristicsItemElems.forEach(elem => {
    //   if (elem.children[1].classList.contains('active')) {
    //     elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
    //   }
    // });//сразу активен один параметр

    const open = (button, dropDown) => {
      closeAllDrops();//  при открывании какого то,закрываю все остальныые
      dropDown.style.height = `${dropDown.scrollHeight}px`;//  при открывании будет брать высоту из открытого элемента
      button.classList.add('active');
      dropDown.classList.add('active');
    };

    const close = (button, dropDown) => {
      button.classList.remove('active');
      dropDown.classList.remove('active');
      dropDown.style.height = '';// при закрытии убираю высоту элемента,он спрячется внутри
    };

    const closeAllDrops = (button, dropDown) => {// закрывает всё
      characteristicsItemElems.forEach((elem) => {
        // console.log(elem.children);//дети elem, те,кто находятся внутри него
        if (elem.children[0] !== button && elem.children[1] !== dropDown) {
          close(elem.children[0], elem.children[1]);
        }
      });// закрывает все,кроме одного открытого
    };

    characteristicsListElem.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('characteristics__title')) {//  кликаю на кнопку,получаю его родителя
        const parent = target.closest('.characteristics__item');//  closest соседей не смотрит,поднимется выше..если родитель такой,
        //  то выполняю действие
        const description = parent.querySelector('.characteristics__description')
        // console.log(description.textContent)
        description.classList.contains('active') ? close(target, description) : open(target, description);
      }
    });

    document.body.addEventListener('click', (event) => {
      const targent = event.target;
      if (!targent.closest('.characteristics__list')) {
        closeAllDrops();
      }
    });// закрывает все при нажатии на любом месте
  };

  const modal = () => {
    const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
    const modal = document.querySelector('.modal');

    cardDetailsButtonBuy.addEventListener('click', () => {
      modal.classList.add('open');
    });

    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close')) {
        modal.classList.remove('open');
      }
    });
  };

  tabs();
  accordion();
  modal();
});