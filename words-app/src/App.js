import React from 'react';
import { CContainer } from '@coreui/react';

import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import WordForm from './Form/Form'
import Output from './Output/Output'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseWord: '',
      wordLenght: '',
      visible: false
    };

    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  handleResponse(data) {
    this.setState({ responseWord: data.word, 
                    wordLenght: data.len,
                    visible: true });
  }

  render() {
    const { responseWord, wordLenght, visible } = this.state;
    return (
      <CContainer id='main-container'>
        <WordForm
          onResponse={this.handleResponse} />
        <Output
          responseWord={responseWord}
          wordLength={wordLenght}
          visible={visible} />
      </CContainer>
    );
  }
}

export default App;