import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ROOT_API } from '../../config/api-config'
import './register.scss'

const Register = () => {
  // state
  const [form,setForm] = useState({
    name:'',
    age:null,
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const [alert] = useState(false)
  const [successLogin,setSuccessLogin] = useState(false)
  // method
  const submitHandler = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    axios.post(ROOT_API + '/auth/register', form)
      .then(res => res.data)
      .then(res => {
        setForm({
          name:'',
          age:null,
          username:'',
          email:'',
          password:'',
          confirmPassword:''
        })
        setSuccessLogin('Register Success, please login with your email and password.')
      })
      .catch(err => {
        setForm({...form,password:'',confirmPassword:''})
        console.log(err.response.data)
      })
  }
  return (
    <Container className='register'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='5'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Register</h2>
            {successLogin ? (
              <Alert color='success' className='text-center upper-first py-1'>{successLogin}</Alert>
            ) : (<>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input 
                  type="text" id="name" placeholder="John Doe" 
                  value={form.name}
                  onChange={(e)=>{setForm({...form,name:e.target.value})}}/>
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input 
                  type="text" id="username" placeholder="johndoe8" 
                  value={form.username} 
                  onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                  type="text" id="email" placeholder="example@email.com" 
                  value={form.email}
                  onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" placeholder="********" 
                  value={form.password}
                  onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input type="password" id="confirmPassword" placeholder="********" 
                  value={form.confirmPassword}
                  onChange={(e)=>{setForm({...form,confirmPassword:e.target.value})}}/>
              </FormGroup>
              {alert && (
                <Alert color={alert.color || 'warning'} className='text-center upper-first py-1'>{alert.message}</Alert>
              )}
              <Button type='submit' color='primary' className='btn-block mt-3'>Register</Button>
            </>)}
            <div className='have-account-link text-center pt-3'>
              <span>Have an account? </span>
              <Link to='/login' className='text-dark'>Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
