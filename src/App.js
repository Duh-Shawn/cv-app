import React, { Component } from "react";
import Info from "./components/Info";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>CV React App</h1>
        <section id="personal-info">
          <h3>Personal Info</h3>
          <Info />
        </section>
        <section id="education-experience">
          <h3>Education</h3>
          <div className="education-container">
            <Education />
            <button type="button">Add</button>
          </div>
        </section>
        {/* <section id="work-experience">2</section> */}
      </div>
    );
  }
}

export default App;
