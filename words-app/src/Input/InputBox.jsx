import React from 'react';
import {CFormInput} from '@coreui/react'

class InputBox extends React.Component {
  
  constructor(props) {
    super(props);
    this.label = props.placeholder;
    this.state = {
      error: false
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);

  }

  componentDidMount() {
    console.log("Mounted");
  }

  handleBlur(e) {
    if (e.target.validity.patternMismatch) {
      console.log("tets");
      this.setState({error: true});
    }
    else {
      this.setState({error: false});
    }
  }

  handleFeedback(error) {
    if(error) {
      
      return "Please provide a word.";
    }
  }

  handleWordChange(e) {
    const value = e.target.value;
    this.props.onValueChange(value);
    this.setState({error: false});
  }

  render() {
    const {error} = this.state;

    return (
          <CFormInput
          placeholder={this.label}                     
          type="text"
          onChange={this.handleWordChange}
          onInvalid={() => this.setState({error: true})}
          invalid={error}
          feedback={this.handleFeedback(error)}
          required
          />

    )
  }
}

export default InputBox;