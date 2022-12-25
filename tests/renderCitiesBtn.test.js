import { renderUI } from "../src/renderUI";
import { renderCitiesBtn } from "../src/renderCitiesBtn";

describe("Render city buttons", () => {

  let el;
  beforeEach(() => {
    el = document.createElement("div");
    renderUI(el);
  });

  it("render 3 buttons", () => {
    const cities = ["Лондон", "Москва", "Сочи"]
    localStorage.setItem("cities", JSON.stringify(cities))
    renderCitiesBtn(el)
    expect(el.querySelector(".tag")).toBeTruthy();
    expect(el.querySelectorAll(".tag").length).toBe(3);
  })
})