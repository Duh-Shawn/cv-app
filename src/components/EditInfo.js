import React, { Component } from "react";
import PropTypes from "prop-types";

class EditInfo extends Component {
  render() {
    const { info } = this.props;
    const { first, last, email, phone } = info;
    const { handleInputChange } = this.props;

    return (
      <form id="info-form">
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
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={phone}
          onChange={handleInputChange}
        />
      </form>
    );
  }
}
EditInfo.propTypes = {
  info: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default EditInfo;
