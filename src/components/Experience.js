import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdMode, MdDelete, MdCheck } from "react-icons/md";

class Experience extends Component {
  constructor(props) {
    super(props);
    const { id, company, title, date, description, editMode } = this.props;
    this.state = {
      id,
      company,
      title,
      date,
      description,
      editMode,
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
    const { id, company, title, date, description, editMode } = this.state;
    const { handleDeletion } = this.props;
    if (editMode) {
      return (
        <form
          className="experience-form"
          data-id={id}
          onSubmit={this.handleEdit}
        >
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
          <div className="form-buttons">
            <button type="submit" className="edit-button">
              <MdCheck size={20} />
            </button>
            <button
              type="button"
              className="edit-button"
              onClick={handleDeletion}
            >
              <MdDelete size={20} />
            </button>
          </div>
        </form>
      );
    }
    return (
      <div className="experience-block block" data-id={id}>
        <div className="block-data">
          <p>Company: {company}</p>
          <p>Title: {title}</p>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
        </div>
        <div className="block-buttons">
          <button
            type="button"
            className="edit-button"
            onClick={this.handleEdit}
          >
            <MdMode size={25} />
          </button>
          <button
            type="button"
            className="edit-button"
            onClick={handleDeletion}
          >
            <MdDelete size={25} />
          </button>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  handleDeletion: PropTypes.func.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Experience;
