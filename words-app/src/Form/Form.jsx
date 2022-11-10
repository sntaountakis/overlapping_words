import React from 'react';
import axios from 'axios';
import {Alert, CForm, CCol, CFormInput, CRow, CButton, CSpinner} from '@coreui/react';

import InputBox from '../Input/InputBox.jsx'
import InputBtn from '../Input/InputBtn.jsx'

import './Form.css';

class WordForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        word: '',
        overlappedWord: '',
        disable: false
      };

      this.handleWordChange = this.handleWordChange.bind(this);
      this.handleOverlappedWordChange = this.handleOverlappedWordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validateForm = this.validateForm.bind(this);
    }
  
    componentDidMount() {
      console.log("Mounted");
    }
  
    validateForm() {
      
      const {word, overlappedWord} = this.state;
      
      // assert both words contain only letters from the alphabet
  
      // assert overlapedWord is the same or smaller than word
  
      // assert none of the fields is empty
  
      // assert maximum word length
  
      // For now return true
      return true;
    }
  
    handleWordChange(word) {
      this.setState({word: word});
    }
  
    handleOverlappedWordChange(overlappedWord) {
      this.setState({overlappedWord: overlappedWord});
    }
    
    handleSubmit(e){

      this.setState({disable: true});

      e.preventDefault();
      if(!this.validateForm())
        return;
      
      const {word, overlappedWord} = this.state;
  
      const data = {
        word: word,
        overlappedWord: overlappedWord
      }

      console.log(data)
      
      axios.post('/index', data).then( res => {
                  console.log(res.data);
                  // TODO: Handle response
                  //this.displayResults();
                })
      
      this.setState({disable: false});
    }
    
    render() {
      const {word, overlappedWord, wordError, overlappedError, disable} = this.state;
      return (
          <CForm onSubmit={this.handleSubmit}>
            <CRow>
              <CCol s>              
                <InputBox
                          placeholder={"Word"}                     
                          onValueChange={this.handleWordChange}
                          oninvalid="this.setCustomValidity('Not Valid')"
                />
              </CCol>

              <CCol s>
                <InputBox
                          placeholder={"Overlapped Word"}
                          type="text"
                          onValueChange={this.handleOverlappedWordChange}
                />
              </CCol>
            </CRow>
            <CRow xs={{ gutter: 5 }}className='justify-content-end'>         
              <CCol xs="auto">
                <CButton 
                        type="submit"
                        disabled={disable}>
                        {disable == true && 
                          <CSpinner coomponent="span" size="sm" aria-hidden="true"/>
                        }
                        Find
                </CButton>
              </CCol>
            </CRow>
          </CForm>
      );
    }
}

export default WordForm;