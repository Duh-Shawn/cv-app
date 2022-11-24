import React, { Component } from "react";
import "../styles/info.scss";
import { MdMode, MdCheck } from "react-icons/md";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      phone: "",
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

  handleEdit = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  render() {
    const { editMode } = this.state;
    const { first, last, email, phone } = this.state;

    if (editMode) {
      return (
        <form id="info-form" onSubmit={this.handleEdit}>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="First Name"
            value={first}
            onChange={this.handleInputChange}
          />

          <input
            type="text"
            id="last"
            name="last"
            placeholder="Last Name"
            value={last}
            onChange={this.handleInputChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={this.handleInputChange}
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone 000-000-0000"
            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
            value={phone}
            onChange={this.handleInputChange}
          />

          <button type="submit" className="edit-button">
            <MdCheck size={25} />
          </button>
        </form>
      );
    }
    return (
      <div className="info-container">
        <div className="info-data">
          <p>First Name: {first}</p>
          <p>Last Name: {last}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
        <div className="info-buttons">
          <button
            type="button"
            className="edit-button"
            onClick={this.handleEdit}
          >
            <MdMode size={25} />
          </button>
        </div>
      </div>
    );
  }
}

export default Info;
