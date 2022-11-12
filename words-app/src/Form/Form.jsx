import React from 'react';
import axios from 'axios';
import { CForm, CCol, CButton, CSpinner, CCard, CCardBody, CCardHeader, CCardText } from '@coreui/react';

import InputBox from '../Input/InputBox.jsx'

import './Form.css';

class WordForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      word: '',
      secondWord: '',
      disable: false,
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleSecondWordChange = this.handleSecondWordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  validateForm() {

    //const { word, secondWord } = this.state;

    // assert both words contain only letters from the alphabet

    // assert overlapedWord is the same or smaller than word

    // assert none of the fields is empty

    // assert maximum word length

    // For now return true
    return true;
  }

  handleWordChange(word) {
    this.setState({ word: word });
  }

  handleSecondWordChange(secondWord) {
    this.setState({ secondWord: secondWord });
  }

  handleSubmit(e) {

    this.setState({ disable: true });
    this.setState({ visible: false });

    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    const { word, secondWord } = this.state;

    const data = {
      word: word,
      second_word: secondWord
    }

    console.log(data)

    axios.post('/api/overlapping', data).then(res => {
      this.props.onResponse(res.data);
    })

    this.setState({ disable: false });
  }

  render() {
    const { disable } = this.state;
    return (
      <CCard>
        <CCardHeader>Overlap Detector</CCardHeader>
        <CCardBody>
          <CCardText>Detects the maximum overlap between two words.</CCardText>
          <CForm className="row g-5" onSubmit={this.handleSubmit}>
            <CCol sm={6}>
              <InputBox
                placeholder={"Word"}
                type="text"
                onValueChange={this.handleWordChange}
              />
            </CCol>
            <CCol sm={6}>
              <InputBox
                placeholder={"Second Word"}
                type="text"
                onValueChange={this.handleSecondWordChange}
              />
            </CCol>
            <CCol >
              <CButton
                type="submit"
                disabled={disable}>
                {disable &&
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                }
                Find
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    );
  }
}

export default WordForm;