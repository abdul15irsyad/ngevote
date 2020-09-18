import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { PilText } from '../../components'
import './reset-password.scss'

const ResetPassword = () => {
  const [pilTexts] = useState([
    { text: '8 characters', isValid: false },
    { text: 'uppercase', isValid: false },
    { text: 'lowercase', isValid: false },
    { text: 'number', isValid: false },
  ])
  const [form,setForm] = useState({
    password: '',
    confirmPassword: '',
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('reset password:',form)
  }
  return (
    <Container className='reset-password'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center'>Reset Password</h2>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="*********"
                value={form.password}
                onChange={(e)=>setForm({...form,password:e.target.value})}/>
              <div className='pil-text-wrapper mt-2'>
                {pilTexts.map((pilText,index)=>{
                  return(
                    <PilText text={pilText.text} isValid={pilText.isValid} key={index}/>
                  )
                })}
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="confirm-password">Confirm Password</Label>
              <Input type="password" name="confirm-password" id="confirm-password" placeholder="*********" 
                value={form.confirmPassword}
                onChange={(e)=>setForm({...form,confirmPassword:e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Input type="hidden" name="token" id="token"/>
            </FormGroup>
            <Button type='submit' color='primary' className='btn-block mt-4'>Reset Password</Button>
            <div className='go-to-login-link text-center mt-3'>
              <Link to='/login' className='text-secondary'>Go To Login</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword
