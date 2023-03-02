import { RenderUI } from "../src/renderUI";

describe("check Render UI", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    new RenderUI(el, {
      title: "MeteoOtus",
    });
  });

  it("create basic markup", () => {
    expect(el.querySelector("h1")).toBeTruthy();
    expect(el.querySelector("h1").innerHTML).toBe("MeteoOtus");
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector(".current-city")).toBeTruthy();
    expect(el.querySelector(".label")).toBeTruthy();
    expect(el.querySelector(".label").innerHTML).toBe(
      "История запросов погоды"
    );
    expect(el.querySelector(".history-cities")).toBeTruthy();
    expect(el.querySelector("#map")).toBeTruthy();
  });
});
