import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './forgot-password.scss'

const ForgotPassword = () => {
  const [form,setForm] = useState({
    email: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit:',form)
  }
  return (
    <Container className='forgot-password'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center'>Forgot Password</h2>
            <FormGroup>
              <Label for="email">Your Email</Label>
              <Input type="text" name="email" id="email" placeholder="eg: example@email.com"
                value={form.email}
                onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
            </FormGroup>
            <Button type='submit' color='primary' className='btn-block mt-4'>Check Email</Button>
            <div className='back-to-login-link text-center mt-3'>
              <Link to='/login' className='text-secondary'>Back To Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgotPassword
