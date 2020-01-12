import React, { Component } from "react";
import "./App.css";
import QuoteMachine from "./components/QuoteMachine";
class App extends Component {
  state = {
    quotes: [],
    currentQuote: "",
    backgroundColor: ""
  };
  componentDidMount = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then(data => data.json())
      .then(quotes =>
        this.setState({ quotes }, () => {
          this.selectQuote();
          this.selectAndSetColour();
        })
      );
  };
  selectQuote = () => {
    let index = Math.floor(Math.random() * (this.state.quotes.length - 1));
    this.setState({ currentQuote: this.state.quotes[index] });
    console.log(this.state.currentQuote);
  };
  selectAndSetColour = () => {
    var colours = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ];
    let colourIndex = Math.floor(Math.random() * (colours.length - 1));
    this.setState({ backgroundColor: colours[colourIndex] });
  };
  buttonHandler = () => {
    this.selectQuote();
    this.selectAndSetColour();
  };
  render() {
    document.body.style.backgroundColor = this.state.backgroundColor;
    return (
      <div className="App">
        <QuoteMachine
          currentQuote={this.state.currentQuote}
          buttonHandler={this.buttonHandler}
          colour={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default App;
