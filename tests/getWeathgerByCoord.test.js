import { renderUI } from "../src/renderUI";
import { getWeatherByCoord } from "../src/getWeatherByCoord";
import { apiKey } from "../src/constants"

describe("get weather by coord", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    renderUI(el);
  });

  it("coord: 51.5073219, -0.1276474", async () => {
    await expect(getWeatherByCoord(51.5073219, -0.1276474, el, apiKey)).toEqual("Лондон")
  })
})