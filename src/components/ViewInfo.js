import React, { Component } from "react";
import PropTypes from "prop-types";

class ViewInfo extends Component {
  render() {
    const { info } = this.props;
    const { first, last, email, phone } = info;

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
ViewInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default ViewInfo;
