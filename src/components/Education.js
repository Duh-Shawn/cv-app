import React, { Component } from "react";
import "../styles/education.scss";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      graduation: "",
      editMode: true,
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleEdit = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  render() {
    const { editMode } = this.state;
    const { school, degree, graduation } = this.state;

    if (editMode) {
      return (
        <div className="education-form-block">
          <form className="education-form" onSubmit={this.handleEdit}>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="School Name"
              value={school}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Degree"
              value={degree}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="graduation"
              id="graduation"
              placeholder="Graduation Year"
              value={graduation}
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    return (
      <div className="education-block">
        <div className="education-data">
          <p>School: {school}</p>
          <p>Degree: {degree}</p>
          <p>Graduation Year: {graduation}</p>
        </div>
        <div className="view-education-buttons">
          <button
            type="button"
            id="edit-education-button"
            onClick={this.handleEdit}
          >
            edit
          </button>
          <button type="button" id="delete-education-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
