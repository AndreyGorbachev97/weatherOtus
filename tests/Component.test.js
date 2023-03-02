import { Component } from "../src/Component";

const sleep = (x) => new Promise((resolve) => setTimeout(resolve, x));

describe("Component", () => {
  let el;
  let text;
  beforeEach(() => {
    el = document.createElement("div");
    text = Math.random() + "";
  });
  it("is a class", () => {
    expect(Component).toBeInstanceOf(Function);
    expect(new Component({})).toBeInstanceOf(Component);
  });

  it("renders component into element", async () => {
    class TestComponent extends Component {
      render() {
        return `<h1>${text}</h1>`;
      }
    }
    new TestComponent(el);
    // ожидание
    await sleep(10);

    expect(el.innerHTML).toBe(`<h1>${text}</h1>`);
  });

  it("renders props from state", async () => {
    class TestComponent extends Component {
      state = {
        text: text,
      };
      render() {
        return `<h1>${this.state.text}</h1>`;
      }
    }
    new TestComponent(el);

    await sleep(10);

    expect(el.innerHTML).toBe(`<h1>${text}</h1>`);
  });

  it("updates presentation on setState call", async () => {
    const text2 = Math.random() + "";
    class TestComponent extends Component {
      state = {
        text,
        count: 1,
      };
      render() {
        return `<h1>${this.state.text}|${this.state.count}</h1>`;
      }
    }
    const component = new TestComponent(el);
    await sleep(10);
    expect(component.setState).toBeInstanceOf(Function);
    component.setState({
      text: text2,
    });
    expect(el.innerHTML).toBe(`<h1>${text2}|1</h1>`);
  });

  it("onMount call", () => {
    class TestComponent extends Component {
      state = {
        text,
        count: 1,
      };
      render() {
        return `<h1>${this.state.text}|${this.state.count}</h1>`;
      }
    }
  });

  it("calls events from `.events` declaration", async () => {
    const onH1Click = jest.fn();
    const onButtonClick = jest.fn();
    const onButtonXClick = jest.fn();

    class TestComponent extends Component {
      onH1Click = onH1Click;
      onButtonClick = onButtonClick;
      onButtonXClick = onButtonXClick;
      events = {
        "click@h1": this.onH1Click,
        "click@button": this.onButtonClick,
        "click@button.x": this.onButtonXClick,
      };
      render() {
        return `
          <h1>0</h1>
          <button>1</button>
          <button class="x">2</button>
        `;
      }
    }
    new TestComponent(el);
    await sleep(10);
    expect(onH1Click).not.toHaveBeenCalled();
    expect(onButtonClick).not.toHaveBeenCalled();
    expect(onButtonXClick).not.toHaveBeenCalled();

    // el.querySelector("h1")?.click();
    el.querySelector("h1")?.dispatchEvent(
      new window.Event("click", {
        bubbles: true,
      })
    );
    expect(onH1Click).toHaveBeenCalledTimes(1);

    el.querySelector("button")?.click();
    expect(onButtonClick).toHaveBeenCalledTimes(1);

    el.querySelector("button.x")?.click();
    expect(onButtonClick).toHaveBeenCalledTimes(2);
    expect(onButtonXClick).toHaveBeenCalledTimes(1);
  });
});
