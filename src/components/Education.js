/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdMode, MdDelete, MdCheck } from "react-icons/md";

function Education(props) {
  const [school, setSchool] = useState(props.school);
  const [degree, setDegree] = useState(props.degree);
  const [graduation, setGraduation] = useState(props.graduation);
  const [editMode, setEditMode] = useState(props.editMode);
  const [id, setId] = useState(props.id);

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    switch (name) {
      case "school":
        setSchool(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "graduation":
        setGraduation(value);
        break;
      case "editMode":
        setEditMode(value);
        break;
      case "id":
        setId(value);
        break;
      default:
        break;
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setEditMode(!editMode);
  };

  const { handleDeletion } = props;
  if (editMode) {
    return (
      <form className="education-form" data-id={id} onSubmit={handleEdit}>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="School Name"
          value={school}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Degree"
          value={degree}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="graduation"
          id="graduation"
          placeholder="Graduation Year"
          value={graduation}
          onChange={handleInputChange}
        />
        <div className="form-buttons">
          <button type="submit" className="edit-button">
            <MdCheck size={25} />
          </button>
          <button
            type="button"
            className="edit-button"
            onClick={handleDeletion}
          >
            <MdDelete size={25} />
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
        <button type="button" className="edit-button" onClick={handleEdit}>
          <MdMode size={25} />
        </button>
        <button type="button" className="edit-button" onClick={handleDeletion}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
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
