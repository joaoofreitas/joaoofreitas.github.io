import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import cpp from '../images/cpp.svg'
import esp32 from '../images/esp32.png'
import linux from '../images/linux.svg'
import npm from '../images/npm.svg'
import python from '../images/python.svg'
import docker from '../images/docker.svg'

//need to clean this className mess

const SkillsImages = () => {
    return(
        <Container fluid>
        <Row className='skillImageRow'>
            <Col className='skillImageCol'>
                <img className='skillImage' src={cpp} alt=''></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={esp32} alt=''></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={linux} alt=''></img>
            </Col>
        </Row>
        <Row className='skillImageRow'>
            <Col className='skillImageCol'>
                <img className='skillImage' src={npm} alt=''></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={docker} alt=''></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={python} alt=''></img>
            </Col>
        </Row>
        </Container>
    );
}

export default SkillsImages;