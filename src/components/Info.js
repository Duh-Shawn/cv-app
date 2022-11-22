import React, { Component } from "react";
import "../styles/info.scss";

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

  render() {
    const { editMode } = this.state;
    const { first, last, email, phone } = this.state;

    if (editMode) {
      return (
        <form id="info-form">
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
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={phone}
            onChange={this.handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      );
    }
    return (
      <div className="info">
        <div className="info-data">
          <p>First Name: {first}</p>
          <p>Last Name: {last}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
        <div className="info-buttons">
          <button type="button" id="edit-info-button">
            edit
          </button>
          <button type="button" id="delete-info-button">
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Info;
