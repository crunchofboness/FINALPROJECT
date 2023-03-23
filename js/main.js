const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed:1000,

 });

 const secondSwiper = new Swiper('.swiper-second__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,

  speed:1000,

  slidesPerGroup: 3,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
 
  spaceBetween: 10,


 });

 const thirdSwiper = new Swiper('.swiper-third__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  loop: true,

  speed:1000,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  spaceBetween: 50,

 });

 const fourthSwiper = new Swiper('.swiper-fourth__container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,

  speed:1000,

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  spaceBetween: 30,

 });

 const element = document.querySelector('.select');
 const choices = new Choices(element, {
   searchEnabled: false,
   itemSelectText: "",
   shouldSort:false,
 });

 const multiSelect = () => {
   const elements = document.querySelectorAll(".multi-select");
   elements.forEach (el =>{
     const choices = new Choices(el, {
       searchEnabled: false,
       itemSelectText: "",
       shouldSort:false
     });
   })
 }

 multiSelect();

 new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
 });

let tabsBtn = document.querySelectorAll('btn__item');
let tabsItem = document.querySelectorAll('tabs-item');

document.querySelectorAll('.btn__item').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.btn__item').forEach(function(btn){ btn.classList.remove('btn__item--active')});
  e.currentTarget.classList.add('btn__item--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });


  ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.760783, 37.614401],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
    });

    var placemark = new ymaps.Placemark([55.760783, 37.614401], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/mark.svg',
      iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(placemark);
}