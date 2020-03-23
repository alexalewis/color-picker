import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    lightness: Math.round(Math.random() * 100),
    value: Math.round(Math.random() * 100),
  }
  changeHue = (e) => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }
  changeSaturation = (e) => {
    this.setState({
      saturation: e.target.value,
    })
  }
  changeLightness = (e) => {
    this.setState({
      lightness: e.target.value,
    })
  }
  randomButton = (e) => {
    this.setState({
      hue: Math.round(Math.random() * 360),
      saturation: Math.round(Math.random() * 100),
      lightness: Math.round(Math.random() * 100),
    })
  }

  render() {
    const newColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`
    console.log(newColor)
    return (
      <>
        <section className="grid-container">
          <section className="header">Color Picker</section>
          <section>
            <section
              className="color-box"
              style={{ backgroundColor: newColor }}
            ></section>
            <p>
              Color is currently hsl({this.state.hue}, {this.state.saturation}%,{' '}
              {this.state.lightness}%)
            </p>
            <br></br>
            <button
              style={{ backgroundColor: newColor }}
              onClick={this.randomButton}
            >
              Random Color
            </button>
          </section>
          <section className="property">H</section>
          <section className="slide-container">
            <input
              type="range"
              min="1"
              max="360"
              onChange={this.changeHue}
              value={this.state.hue}
              className="slider"
            />
          </section>
          <section className="property">S</section>
          <section className="slide-container">
            <input
              type="range"
              min="0"
              max="100"
              onInput={this.changeSaturation}
              value={this.state.saturation}
              className="slider"
            />
          </section>
          <section className="property">L</section>
          <section className="slide-container">
            <input
              type="range"
              min="0"
              onInput={this.changeLightness}
              value={this.state.lightness}
              className="slider"
            />
          </section>
        </section>
      </>
    )
  }
}

export default App
