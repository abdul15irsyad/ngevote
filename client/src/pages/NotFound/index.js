import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { PageNotFound } from '../../assets'
import ResponesiveImage from '../../components/ResponsiveImage'
import './not-found.scss'

const NotFound = () => {
  return (
    <Container className='not-found'>
      <Row className='justify-content-center'>
        <Col md='8' lg='5'>
          <ResponesiveImage src={PageNotFound} borderRadius='0px' objectFit='contain' aspectRatio='85%'/>
          <h1 className='text-center'>404 Not Found</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
