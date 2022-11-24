import React, { Component } from "react";
import PropTypes from "prop-types";
import { MdMode, MdDelete, MdCheck } from "react-icons/md";

class Education extends Component {
  constructor(props) {
    super(props);
    const { school, degree, graduation, editMode, id } = this.props;
    this.state = {
      school,
      degree,
      graduation,
      editMode,
      id,
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
    const { editMode } = this.state;
    const { school, degree, graduation, id } = this.state;
    const { handleDeletion } = this.props;

    if (editMode) {
      return (
        <form
          className="education-form"
          data-id={id}
          onSubmit={this.handleEdit}
        >
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
            type="number"
            name="graduation"
            id="graduation"
            placeholder="Graduation Year"
            value={graduation}
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
      <div className="education-block block" data-id={id}>
        <div className="block-data">
          <p>School: {school}</p>
          <p>Degree: {degree}</p>
          <p>Graduation Year: {graduation}</p>
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
Education.propTypes = {
  handleDeletion: PropTypes.func.isRequired,
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  graduation: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Education;
