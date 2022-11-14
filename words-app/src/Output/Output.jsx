import React from 'react';
import { CCollapse, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react';

class Output extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      responseWord: props.responseWord,
      wordLength: props.wordLength,
      visible: props.visible
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.responseWord !== this.props.responseWord) {
      this.setState({ responseWord: this.props.responseWord });
    }

    if (prevProps.wordLength !== this.props.wordLength) {
      this.setState({ wordLength: this.props.wordLength });
    }

    if (prevProps.visible !== this.props.visible) {
      this.setState({ visible: this.props.visible });
    }
  }

  render() {
    const { responseWord, wordLength, visible } = this.state;
    if (wordLength) {
      return (
        <CCollapse visible={visible}>
          <CCard className='mt-3 border-success border-top-3'>
            <CCardBody>
              <CCardTitle>Overlapping Word</CCardTitle>
              <CCardText>{responseWord}</CCardText>
            </CCardBody>
            <CCardBody>
              <CCardTitle> Number of Overlapping Characters</CCardTitle>
              <CCardText>{wordLength}</CCardText>
            </CCardBody>
          </CCard>
        </CCollapse>
      );
    }else {
      return (
        <CCollapse visible={visible}>
          <CCard className="mt-3 border-danger border-top-3">
            <CCardBody>
              <CCardTitle>No overlap detected</CCardTitle>
            </CCardBody>
          </CCard>
        </CCollapse>
      );
    }
  }
}

export default Output;