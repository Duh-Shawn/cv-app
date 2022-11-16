import React, { Component } from "react";
import PropTypes from "prop-types";

class EditInfo extends Component {
  render() {
    const { info } = this.props;
    const { first, last, email, phone } = info;
    const { handleInputChange } = this.props;

    return (
      <form id="person-info-form">
        <label>
          First Name:
          <input
            type="text"
            id="first"
            name="first"
            value={first}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            id="last"
            name="last"
            value={last}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={phone}
            onChange={handleInputChange}
          />
        </label>
      </form>
    );
  }
}
EditInfo.propTypes = {
  info: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default EditInfo;
