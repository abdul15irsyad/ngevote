import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import './login.scss'

const Login = () => {
  let history = useHistory()
  const [form,setForm] = useState({
    username: '',
    password: ''
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('login:',form)
    history.push('/')
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
            <Button type='submit' color='primary' className='btn-block mt-4'>Login</Button>
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
