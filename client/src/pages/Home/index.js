import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

const Home = () => {
  return (
    <Container className='home'>
      <Row className='justify-content-center mt-4'>
        <Col lg='9'>
          <h1>Ngevote</h1>
          <p>&emsp;&emsp;Ngevote is an simple <b>online voting</b> application developed by Irsyad Abdul using the MERN Stack (Mongo - Express - React - Node JS) as an exercise after learning from the Youtube channel, Medium, and others. ^_^</p>
        </Col>
      </Row>
      <Row className='justify-content-center mt-34'>
        <Col lg='3' md='4' xs='10'>
          <Button tag={Link} to='/vote-now' color='primary' className='btn-block'>Vote Now</Button>
        </Col>
      </Row>
    </Container>    
  )
}

export default Home
