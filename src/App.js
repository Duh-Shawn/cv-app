import React, { Component } from "react";
import Info from "./components/Info";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>CV React App</h1>
        <section id="personal-info">
          <h3> Personal Info</h3>
          <Info />
        </section>
        {/* <section id="education-experience">1</section>
        <section id="work-experience">2</section> */}
      </div>
    );
  }
}

export default App;
