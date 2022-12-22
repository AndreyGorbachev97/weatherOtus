import ymaps from 'ymaps';

let center = [48.8866527839977, 2.34310679732974];

export const renderMap = (center) => {
  ymaps
    .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    .then(maps => {
      const map = new maps.Map('map', {
        center: center,
        zoom: 13,
        Placemark: center
      });
    })
    .catch(error => console.log('Failed to load Yandex Maps', error));
};