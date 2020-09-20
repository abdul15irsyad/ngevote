import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ROOT_API } from '../../config/api-config'
import './login.scss'

const Login = () => {
  let history = useHistory()
  // state
  const [form,setForm] = useState({
    username: '',
    password: ''
  })
  const [error,setError] = useState(false)
  // method
  const submitHandler = async(e) => {
    e.preventDefault()
    document.activeElement.blur()
    setError(false)
    axios.post(ROOT_API + '/auth', form)
      .then(res => res.data)
      .then(res => {
        // const token = res.token
        // console.log(token)
        // set token to localStorage
        history.push('/')
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }
  useEffect(()=>{
    // console.log(error)
  },[error])
  return (
    <Container className='login'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Login</h2>
            <FormGroup>
              <Label for="username">Email or Username</Label>
              <Input 
                type="text" id="username" placeholder="example@email.com" 
                value={form.username} 
                onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="********" 
                value={form.password}
                onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
            </FormGroup>
            {error && (
              <Alert color='warning' className='text-center upper-first py-1'>{error}</Alert>
            )}
            <Button type='submit' color='primary' className='btn-block mt-4' disabled={form.username===''||form.password===''}>Login</Button>
            <div className='forgot-password-link text-right pt-3'>
              <Link to='/forgot-password' className='text-secondary'>Forgot Password?</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
