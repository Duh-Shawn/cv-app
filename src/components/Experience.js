/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdMode, MdDelete, MdCheck } from "react-icons/md";

function Experience(props) {
  const [company, setCompany] = useState(props.company);
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(props.editMode);
  const [id, setId] = useState(props.id);

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    switch (name) {
      case "company":
        setCompany(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "date":
        setDate(value);
        break;
      case "description":
        setDescription(value);
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
      <form className="experience-form" data-id={id} onSubmit={handleEdit}>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company"
          value={company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          value={date}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id="description"
          rows="5"
          placeholder="Describe your work"
          value={description}
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
    <div className="experience-block block" data-id={id}>
      <div className="block-data">
        <p>Company: {company}</p>
        <p>Title: {title}</p>
        <p>Date: {date}</p>
        <p>Description: {description}</p>
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
