import { RenderUI } from "../src/renderUI";
import { RenderCity } from "../src/renderCity";
import { apiKey } from "../src/constants";
import { getWeatherByCoord } from "../src/getWeatherByCoord";

describe("render city", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    new RenderUI(el);
  });

  it("render city London", async () => {
    const data = await getWeatherByCoord(51.5073219, -0.1276474, el, apiKey);
    await new RenderCity(el, data);
    expect(el.querySelector(".img")).toBeTruthy();
    expect(el.querySelector(".info-wether")).toBeTruthy();
  });
});
