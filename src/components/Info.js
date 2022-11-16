import React, { Component } from "react";
import EditInfo from "./EditInfo";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      phone: "",
      editMode: true,
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
        <EditInfo
          info={{ first, last, email, phone }}
          handleInputChange={this.handleInputChange}
        />
      );
    }
    return null;
  }
}

export default Info;
