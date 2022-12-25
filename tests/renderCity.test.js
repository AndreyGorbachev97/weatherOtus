import { renderUI } from "../src/renderUI";
import { renderCity } from "../src/renderCity";
import { apiKey } from "../src/constants";
import { getWeatherByCoord } from "../src/getWeatherByCoord";

describe("render city", () => {

  let el;
  beforeEach(() => {
    el = document.createElement("div");
    renderUI(el);
  });

  it("render city London", async () => {
    const data = await getWeatherByCoord(51.5073219, -0.1276474, el, apiKey)
    await renderCity(data, el);
    expect(el.querySelector("#map")).toBeTruthy();
    expect(el.querySelector(".img")).toBeTruthy();
    expect(el.querySelector(".info-wether")).toBeTruthy();
    expect(el.querySelector("h2")).toBeTruthy();
    expect(el.querySelector("h2").innerText).toBeTruthy();
  })
})