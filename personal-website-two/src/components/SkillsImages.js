import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import cpp from '../images/cpp.svg'
import arduino from '../images/arduino.svg'
import linux from '../images/linux.svg'
import node from '../images/node.svg'
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
                <img className='skillImage' src={arduino} alt=''></img>
            </Col>
            <Col className='skillImageCol'>
                <img className='skillImage' src={linux} alt=''></img>
            </Col>
        </Row>
        <Row className='skillImageRow'>
            <Col className='skillImageCol'>
                <img className='skillImage' src={node} alt=''></img>
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