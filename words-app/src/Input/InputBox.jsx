import React from 'react';
import { CFormInput } from '@coreui/react'

class InputBox extends React.Component {

  constructor(props) {
    super(props);
    this.label = props.placeholder;
    this.state = {
      error: false
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  handleWordChange(e) {
    const value = e.target.value;
    this.props.onValueChange(value);
    this.setState({ error: false });
  }

  handleFeedback(error) {
    if (error) {
      return "Please provide a word.";
    }
  }

  handleInvalid(e) {
    e.target.setCustomValidity('');
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;

    return (
      <CFormInput
        placeholder={this.label}
        type="text"
        onChange={this.handleWordChange}
        onInvalid={this.handleInvalid}
        invalid={error}
        feedback={this.handleFeedback(error)}
        required
      />
    )
  }
}

export default InputBox;