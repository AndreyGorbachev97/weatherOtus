import { Component } from "./Component";

export class RenderCity extends Component {
  state = {};

  render() {
    const temp = this.state.main.temp - 273.15;
    const cityName = this.state.name;
    const iconId = this.state.weather[0].icon;
    const desc = this.state.weather[0].description;
    const tempRound = temp.toFixed(2);
    const tempFormat = tempRound > 0 ? `+ ${tempRound} °C` : `${tempRound} °C`;
    const fullDesc = `Температура воздуха составляет ${tempRound} градус(ов)`;
    const iconSrc = `https://openweathermap.org/img/w/${iconId}.png`;

    return `
    <img class="img" src="${iconSrc}">
    <div class="info-wether">
      <h2>${tempFormat}</h2>
      <div>${cityName}</div>
      <div>${fullDesc}</div>
      <div>${desc}</div>
    </div>
    `;
  }
}
