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
    // Check Response from server

    // TODO: Unite setStates 
    this.setState({ responseWord: data.word });
    this.setState({ wordLenght: data.len });
    this.setState({ visible: true });
    console.log(data);
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
