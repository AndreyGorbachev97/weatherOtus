import ymaps from "ymaps";

export const renderMap = (center) => {
  ymaps
    .load("https://api-maps.yandex.ru/2.1/?lang=ru_RU")
    .then((maps) => {
      new maps.Map("map", {
        center,
        zoom: 13,
        Placemark: center,
      });
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));
};
