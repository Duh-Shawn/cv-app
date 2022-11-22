import React, { Component } from "react";
import "../styles/experience.scss";

class Experience extends Component {
  render() {
    const experienceInfo = {
      companyName: "GOOGLE",
      title: "Software Engineer",
      date: "2019",
      description: "AWDAWDawdawdwadAWDawD",
    };
    const editMode = true;
    if (editMode) {
      return (
        <div className="experience-form-block">
          <form className="experience-form">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
            />
            <input type="text" name="title" id="title" placeholder="Title" />
            <input type="date" name="date" id="date" placeholder="Date" />
            <textarea
              name="description"
              id="description"
              placeholder="Describe your work"
              rows="5"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    return (
      <div className="experience-block">
        <div className="experience-data">
          <p>Company: {experienceInfo.companyName}</p>
          <p>Title: {experienceInfo.title}</p>
          <p>Date: {experienceInfo.date}</p>
          <p>Description: {experienceInfo.description}</p>
        </div>
        <div className="view-experience-buttons">
          <button type="button" id="edit-experience-button">
            edit
          </button>
          <button type="button" id="delete-experience-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
