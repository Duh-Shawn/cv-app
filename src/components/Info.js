import React, { useState } from "react";
import { MdMode, MdCheck } from "react-icons/md";

function Info() {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editMode, setEditMode] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    switch (name) {
      case "first":
        setFirstName(value);
        break;
      case "last":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "editMode":
        setEditMode(value);
        break;
      default:
        break;
    }
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  if (editMode) {
    return (
      <form id="info-form" onSubmit={handleEdit}>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="First Name"
          value={first}
          onChange={handleInputChange}
        />

        <input
          type="text"
          id="last"
          name="last"
          placeholder="Last Name"
          value={last}
          onChange={handleInputChange}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone 000-000-0000"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
          value={phone}
          onChange={handleInputChange}
        />
        <div className="form-buttons">
          <button type="submit" className="edit-button">
            <MdCheck size={25} />
          </button>
        </div>
      </form>
    );
  }
  return (
    <div className="info-block block">
      <div className="block-data">
        <p>First Name: {first}</p>
        <p>Last Name: {last}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <div className="block-buttons">
        <button type="button" className="edit-button" onClick={handleEdit}>
          <MdMode size={25} />
        </button>
      </div>
    </div>
  );
}

export default Info;
