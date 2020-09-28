import React, { Component } from "react";

export default class CustomDocumentCellRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  refresh(params) {
    if (params.value !== this.state.value) {
      this.setState({
        value: params.value,
      });
    }
    return true;
  }

  render() {
    return <div>Test Document</div>;
  }
}
