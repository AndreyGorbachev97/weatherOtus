import { RenderUI } from "../src/renderUI";
import { apiKey } from "../src/constants";
import { getCoordByCity } from "../src/getCoordByCity";

describe("get coord by city", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    new RenderUI(el);
  });

  it("get London", async () => {
    const data = await getCoordByCity("Лондон", el, apiKey);

    expect(data.lat).toBeTruthy();
    expect(data.lon).toBeTruthy();
    expect(data.lat).toBe(51.5073219);
    expect(data.lon).toBe(-0.1276474);
  });
});
