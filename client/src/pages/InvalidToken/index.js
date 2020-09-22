import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Col, Container, Row } from 'reactstrap'
import { OopsImage } from '../../assets'
import { ResponsiveImage } from '../../components'
import './invalid-token.scss'

const InvalidToken = () => {
  const [message] = useState('Your token was invalid, maybe because it\'s expired or something else.')
  return (
    <Container className='invalid-token'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4' className='align-self-center'>
          <h1 className='text-center'>Oooopss...</h1>
          <div className="image-invalid py-3 px-5">
            <ResponsiveImage src={OopsImage} alt='oops image' objectFit='contain'/>
          </div>
          <Alert color='warning' className='text-center upper-first'>{message}</Alert>
          <div className='go-to-login-link text-center mt-3'>
            <Link to='/login' className='text-secondary'>Back to Login</Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default InvalidToken
