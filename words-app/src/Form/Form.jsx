import React from 'react';
import axios from 'axios';
import {Alert, CForm, CCol, CContainer, CButton, CSpinner, CCollapse, CCard, CCardBody} from '@coreui/react';

import InputBox from '../Input/InputBox.jsx'
import InputBtn from '../Input/InputBtn.jsx'

import './Form.css';

class WordForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        word: '',
        secondWord: '',
        disable: false,
        visible: false,
        responseWord: '',
        responseLetters: 0
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
      
      const {word, secondWord} = this.state;
      
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
  
    handleSecondWordChange(secondWord) {
      this.setState({secondWord: secondWord});
    }
    
    handleSubmit(e){

      this.setState({disable: true});
      this.setState({visible: false});

      e.preventDefault();
      if(!this.validateForm())
        return;
      
      const {word, secondWord} = this.state;
  
      const data = {
        word: word,
        second_word: secondWord
      }

      console.log(data)
      
      axios.post('/index', data).then( res => {
    
                  this.handleResponse(res.data);
                })
      
      this.setState({disable: false});
    }

    handleResponse(data) {
      // Check Response from server

      const word = data.word;
      const nletters = data.len;
      this.setState({responseWord: word});
      this.setState({responseLetters: nletters});
      this.setState({visible: true});
      
    }

    
    render() {
      const {word, disable, visible, responseWord, responseLetters} = this.state;
      return (
          <CForm className="row g-3" onSubmit={this.handleSubmit}>
            
              <CCol>              
                <InputBox
                          placeholder={"Word"}                     
                          type="text"
                          onValueChange={this.handleWordChange}
                />
              </CCol>

              <CCol>
                <InputBox
                          placeholder={"Second Word"}
                          type="text"
                          onValueChange={this.handleSecondWordChange}
                />
              </CCol>
            
                     
              <CCol xs="auto">
                <CButton 
                        type="submit"
                        disabled={disable}>
                        {disable && 
                          <CSpinner coomponent="span" size="sm" aria-hidden="true"/>
                        }
                        Find
                </CButton>
              </CCol>
            
          
            <CCollapse className="collapse-response" visible={visible}>

            <CCard style={{width: "100%"}}className="mt-3">

              <CCardBody>
                  Ovelapping characters: {responseWord}
              </CCardBody>

            </CCard>
            <CCard style={{width: "100%"}}className="mt-3">

              <CCardBody>
                Number of characters: {responseLetters}
              </CCardBody>

            </CCard>
            
            </CCollapse>
          
          </CForm>
      );
    }
}

export default WordForm;