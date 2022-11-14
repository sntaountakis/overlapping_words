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
      serverError: ''
    };

    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleSecondWordChange = this.handleSecondWordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  handleWordChange(word) {
    this.setState({ word: word });
  }

  handleSecondWordChange(secondWord) {
    this.setState({ secondWord: secondWord });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({ disable: true });
    this.setState({ visible: false });

    const { word, secondWord } = this.state;

    const data = {
      word: word,
      second_word: secondWord
    }

    console.log(data)

    axios.post('/api/overlap', data).then(res => {
      this.setState({ serverError: '' });
      this.props.onResponse(res.data);
    }).catch(err => {
      if (err.response) {
        this.setState({ serverError: err.response.data.error });
      }
      else {
        this.setState({ serverError: "Something went wrong in our side. Please try again" });
      }
    })

    this.setState({ disable: false });
  }

  render() {
    const { disable, serverError } = this.state;
    return (
      <CCard className='border-secondary'>
        <CCardHeader className='border-secondary'>Overlap Detector</CCardHeader>
        <CCardBody>
          <CCardText>Please enter two words to find their maximum overlap.</CCardText>
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
            <CCol>
              <p style={{ color: "red" }}>{serverError}</p>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    );
  }
}

export default WordForm;