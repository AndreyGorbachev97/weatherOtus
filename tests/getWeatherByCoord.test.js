import { renderUI } from "../src/renderUI";
import { getWeatherByCoord } from "../src/getWeatherByCoord";
import { apiKey } from "../src/constants"

describe("get weather by coord", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    renderUI(el);
    jest.setTimeout(30000);
    // p = new SUT.PlaywrightFluent();
  });

  it("coord: 51.5073219, -0.1276474", async () => {
    const data = await getWeatherByCoord(51.5073219, -0.1276474, el, apiKey)
    expect(data.name).toEqual("Лондон")
    expect(data.weather).toBeTruthy()
  })
})