import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ROOT_API } from '../../config/api-config'
import './forgot-password.scss'

const ForgotPassword = () => {
  const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
  // state
  const [form,setForm] = useState({
    email: '',
  })
  const [alert,setAlert] = useState(false)
  // method
  const submitHandler = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    setAlert(false)
    axios.post(ROOT_API + '/auth/forgot-password', form)
      .then(res => res.data)
      .then(res => {
        setAlert({
          type: 'success',
          message: res.message
        })
        console.log(res.token)
      })
      .catch(err => {
        setAlert({
          type: 'error',
          message: err.response.data.message
        })        
      })
  }
  useEffect(()=>{
    // console.log(message)
  },[alert])
  return (
    <Container className='forgot-password'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Forgot Password</h2>
            <FormGroup>
              <Label for="email">Your Email</Label>
              <Input type="text" name="email" id="email" placeholder="example@email.com"
                value={form.email}
                onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
              <div className="forgot-password-info text-center px-2">
                <small>We'll send a link to reset your password !</small>
              </div>
            </FormGroup>
            {alert && (
              <Alert color={alert.type==='error'?'warning':'success'} className='text-center upper-first py-1'>{alert.message}</Alert>
            )}
            <Button type='submit' color='primary' className='btn-block mt-4' disabled={!emailPattern.test(form.email)}>Forgot Password</Button>
            <div className='back-to-login-link mt-3'>
              <Link to='/login' className='text-secondary'>Back to Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgotPassword
