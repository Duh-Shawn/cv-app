import React, { Component } from "react";
import "../styles/experience.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      date: "",
      description: "",
      editMode: false,
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

  handleEdit = (event) => {
    event.preventDefault();
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  render() {
    const { company, title, date, description } = this.state;
    const { editMode } = this.state;
    if (editMode) {
      return (
        <form className="experience-form">
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            value={company}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={this.handleInputChange}
          />
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={this.handleInputChange}
          />
          <textarea
            name="description"
            id="description"
            rows="5"
            placeholder="Describe your work"
            value={description}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={this.handleEdit}>
            Submit
          </button>
        </form>
      );
    }
    return (
      <div className="experience-block">
        <div className="experience-data">
          <p>Company: {company}</p>
          <p>Title: {title}</p>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
        </div>
        <div className="view-experience-buttons">
          <button type="button" onClick={this.handleEdit}>
            edit
          </button>
          <button type="button">delete</button>
        </div>
      </div>
    );
  }
}

export default Experience;
