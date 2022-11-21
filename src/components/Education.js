import React, { Component } from "react";
import "../styles/education.scss";

class Education extends Component {
  render() {
    const educationInfo = {
      schoolName: "CNU",
      degree: "Computer Engineering",
      graduationYear: "2019",
    };
    const editMode = false;
    if (editMode) {
      return (
        <div className="education-form-block">
          <form className="education-form">
            <input
              type="text"
              name="school"
              id="school"
              placeholder="School Name"
            />
            <input type="text" name="degree" id="degree" placeholder="Degree" />
            <input
              type="text"
              name="graduation"
              id="graduation"
              placeholder="Graduation Year"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    return (
      <div className="education-block">
        <div className="education-data">
          <p>School: {educationInfo.schoolName}</p>
          <p>Degree: {educationInfo.degree}</p>
          <p>Graduation Year: {educationInfo.graduationYear}</p>
        </div>
        <div className="view-education-buttons">
          <button type="button" id="edit-education-button">
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
