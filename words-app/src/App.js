import React from 'react';

import './App.css';

import WordForm from './Form/Form'
import Output from './Output/Output'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      results: ''
    }
  }

  componentDidMount() {
    console.log("Mounted");
  }


  render() {
    const {results} = this.state;
    return (
      <div className="App">
        <WordForm  result={results}/>
        
        {results.length > 0 && 
          <Output result={results}/>
        }

      </div>
    );
  }
}

export default App;
