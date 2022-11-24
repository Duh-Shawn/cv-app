import React, { Component } from "react";
import { GrAdd } from "react-icons/gr";
import uniqid from "uniqid";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationList: [],
      experienceList: [],
    };
  }

  handleAdd = (event) => {
    const { educationList, experienceList } = this.state;
    const block = event.target.parentNode;

    if (block.classList.contains("education-container")) {
      this.setState({
        educationList: [
          ...educationList,
          {
            school: "",
            degree: "",
            graduation: "",
            editMode: true,
            id: uniqid(),
          },
        ],
      });
    } else if (block.classList.contains("experience-container")) {
      this.setState({
        experienceList: [
          ...experienceList,
          {
            company: "",
            title: "",
            date: "",
            description: "",
            editMode: true,
            id: uniqid(),
          },
        ],
      });
    }
  };

  handleDeletion = (event) => {
    const { educationList, experienceList } = this.state;
    const block = event.target.parentNode.parentNode;

    if (
      block.classList.contains("education-block") ||
      block.classList.contains("education-form")
    ) {
      this.setState({
        educationList: educationList.filter(
          (item) => item.id !== block.dataset.id
        ),
      });
    } else if (
      block.classList.contains("experience-block") ||
      block.classList.contains("experience-form")
    ) {
      this.setState({
        experienceList: experienceList.filter(
          (item) => item.id !== block.dataset.id
        ),
      });
    }
  };

  render() {
    const { educationList, experienceList } = this.state;
    return (
      <div className="app">
        <h1>CV Creator</h1>
        <section id="personal-info">
          <h3>Personal Info</h3>
          <div className="info-container">
            <Info />
          </div>
        </section>

        <section id="education-experience">
          <h3>Education</h3>
          <div className="education-container container">
            {educationList.map((item) => (
              <Education
                key={item.id}
                id={item.id}
                school={item.school}
                degree={item.degree}
                graduation={item.graduation}
                editMode={item.editMode}
                handleDeletion={this.handleDeletion}
              />
            ))}
            <button
              type="button"
              className="add-button"
              onClick={this.handleAdd}
            >
              <GrAdd size={25} />
            </button>
          </div>
        </section>

        <section id="work-experience">
          <h3>Experience</h3>
          <div className="experience-container container">
            {experienceList.map((item) => (
              <Experience
                key={item.id}
                id={item.id}
                company={item.company}
                title={item.title}
                date={item.date}
                description={item.description}
                editMode={item.editMode}
                handleDeletion={this.handleDeletion}
              />
            ))}
            <button
              type="button"
              className="add-button"
              onClick={this.handleAdd}
            >
              <GrAdd size={25} />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
