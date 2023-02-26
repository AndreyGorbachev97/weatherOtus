import { loading } from "../src/loading";
import { renderUI, RenderUI } from "../src/renderUI";

describe("loading", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    new RenderUI(el, {});
  });

  it("is loading", () => {
    loading(el);
    expect(el.querySelector(".loading")).toBeTruthy();
    expect(el.querySelector(".loading").innerText).toBe("Загрузка данных...");
  });
});
