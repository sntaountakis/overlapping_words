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
    }

    render() {
        const { responseWord, wordLength, visible } = this.state;
        if (wordLength) {
            return (
                <CCollapse className="collapse-response" visible={visible}>
                    <CCard style={{ width: "100%" }} className="mt-3">
                        <CCardBody>
                            <CCardTitle>Overlapping Characters</CCardTitle>
                            <CCardText>{responseWord}</CCardText>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ width: "100%" }} className="mt-3">
                        <CCardBody>
                            <CCardTitle> Length of Overlapping Characters</CCardTitle>
                            <CCardText>{wordLength}</CCardText>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            );
        }

        else {
            return (
                <CCollapse className="collapse-response" visible={visible}>
                    <CCard style={{ width: "100%" }} className="mt-3">
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