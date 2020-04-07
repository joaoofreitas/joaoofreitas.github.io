import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import cpp from '../images/cpp.svg'
import esp32 from '../images/esp32.png'
import linux from '../images/linux.svg'
import npm from '../images/npm.svg'
import python from '../images/python.svg'
import react from '../images/react.svg'

const SkillsImages = () => {
    return(
        <Container fluid>
        <Row className='skillImageRow'>
            <Col className='skillImageCol'>
                <img className='skillImage' src={cpp}></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={esp32}></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={linux}></img>
            </Col>
        </Row>
        <Row className='skillImageRow'>
            <Col className='skillImageCol'>
                <img className='skillImage' src={npm}></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={react}></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={python}></img>
            </Col>
        </Row>
        </Container>
    );
}

export default SkillsImages;