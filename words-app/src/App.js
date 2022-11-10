import React from 'react';
import {Alert, CContainer, CRow, CCol, CFormInput, CForm, CFormSelect, CFormCheck, CButton} from '@coreui/react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WordForm from './Form/Form'
import Output from './Output/Output'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    console.log("Mounted");
  }


  render() {
    
    return (
      <CContainer>
        <WordForm />
      </CContainer>
    );
  }
}

export default App;
