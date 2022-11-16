import React, { Component } from "react";
import Info from "./components/Info";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>CV React App</h1>
        <Info />
      </div>
    );
  }
}

export default App;
