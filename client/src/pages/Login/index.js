import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './login.scss'

const Login = () => {
  const [form,setForm] = useState({
    username: '',
    password: ''
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit:',form)
  }
  return (
    <Container className='login'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center'>Login</h2>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                type="text" id="username" placeholder="eg: johndoe98" 
                value={form.username} 
                onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="********" 
                value={form.password}
                onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
            </FormGroup>
            <input className='btn btn-primary btn-block mt-4' type='submit' value='Login'/>
            <div className='forgot-password-link text-center pt-3'>
              <Link to='/forgot-password' className='text-secondary'>Forgot Password?</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
