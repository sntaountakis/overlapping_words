import React from 'react';
import axios from 'axios';
import {Alert, CForm, CCol, CFormInput} from '@coreui/react';

import Input from '../Input/InputBox.jsx'
import InputBtn from '../Input/InputBtn.jsx'

import './Form.css';

class WordForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        word: '',
        overlappedWord: ''
      };
  
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
  
    handleWordChange(e) {
      const value = e.target.value;
      this.setState({word: value});
    }
  
    handleOverlappedWordChange(e) {
      const value = e.target.value;
      this.setState({overlapedWord: value});
    }
  
    handleSubmit(e){
      e.preventDefault();
      if(!this.validateForm())
        return;
      
      const {word, overlappedWord} = this.state;
  
      const data = {
        word: word,
        overlappedWord: overlappedWord
      }
  
      axios.post('/index',
                {Headers: {'Accept': 'application/json', 
                          'Content-Type': 'application/json'}},
                {data: {...data}})
                .then( res => {
                  // TODO: Handle response
                  //this.displayResults();
                })
      
    }
    
    render() {
      const {word, overlappedWord} = this.state;
      return (
          <CForm >
            <CCol s>              
              <CFormInput
                        placeholder={"Word"}
                        onChange={(e) => this.handleWordChange(e)}
              />
            </CCol>

            <CCol s>
              <CFormInput
                        placeholder={"Overlapped Word"}
                        onChange={(e) => this.handleOverlappedWordChange(e)}
              />
  
              <InputBtn />
            
            </CCol>
          </CForm>
      );
    }
}

export default WordForm;
