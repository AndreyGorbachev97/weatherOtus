export const saveHistory = (city) => {
  const store = localStorage.getItem("cities");

  if (store) {
    let cities = JSON.parse(store);
    if (cities.length >= 10) {
      cities = cities.slice(0, 9);
    }
    localStorage.setItem("cities", JSON.stringify([city, ...cities]));
  } else {
    localStorage.setItem("cities", JSON.stringify([city]));
  }
};
