import React from 'react';
import axios from 'axios';

import Input from '../Input/InputBox.jsx'
import InputBtn from '../Input/InputBtn.jsx'

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
  
    handleWordChange(word) {
      this.setState({word: word});
    }
  
    handleOverlappedWordChange(overlapedWord) {
      this.setState({overlapedWord: overlapedWord});
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
          <div id='submit-form'>
            <form 
                  className='wordsForm'
                  onSubmit={this.handleSubmit}>
              
              <Input
                    id={1}
                    value={word}
                    onValueChange={this.handleWordChange}
                    type="text"
                    label="Word"
                    locked={false}
                    active={false}
              />
  
              <Input
                    id={2}
                    value={overlappedWord}
                    onValueChange={this.handleOverlappedWordChange}
                    type="text"
                    label="Overlapped Word"
                    locked={false}
                    active={false}
              />
  
              <InputBtn />
            
            </form>
          </div>
      );
    }
}

export default WordForm;