import { renderUI } from "../src/renderUI";
import { saveHistory } from "../src/saveHistory";

describe("working history", () => {

  let el;
  beforeEach(() => {
    el = document.createElement("div");
    renderUI(el);
  });

  it("save to the beginning of the array", async () => {
    const cities = ["Лондон", "Москва", "Сочи", "Аланья", "Кемер", "Уфа", "Банког", "Тагил", "Париж"]
    localStorage.setItem("cities", JSON.stringify(cities))
    saveHistory("Анапа", el)
    const arr = JSON.parse(localStorage.getItem("cities"))
    expect(arr.length).toBe(10);
    expect(arr[0]).toBe("Анапа");
  })

  it("saving the 11th element", async () => {
    const cities = ["Лондон", "Москва", "Сочи", "Аланья", "Кемер", "Уфа", "Банког", "Тагил", "Париж", "Магадан"]
    localStorage.setItem("cities", JSON.stringify(cities))
    saveHistory("Анапа", el)
    const arr = JSON.parse(localStorage.getItem("cities"))
    expect(arr.length).toBe(10);
    expect(arr[0]).toBe("Анапа");
    expect(arr.at(-1)).toBe("Париж");
  })


})