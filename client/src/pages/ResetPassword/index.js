import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { PilText } from '../../components'
import { ROOT_API } from '../../config/api-config'
import { useQuery } from '../../utils'
import InvalidToken from '../InvalidToken'
import './reset-password.scss'

const ResetPassword = () => {
  // get query parameters
  const q = useQuery()
  const token = q.get('token')
  // check token
  useEffect(()=>{
    axios.get(ROOT_API + '/auth/check-reset-token',{ headers: { 'x-auth-token' : token }})
      .then(() => setIsTokenValid(true))
      .catch(err=>{
        setIsTokenValid(false)
        setAlert({
          type: 'error',
          message: err.response.data.message
        })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // state
  const [isTokenValid,setIsTokenValid] = useState(null)
  const [form,setForm] = useState({ password: '', confirmPassword: '' })
  const [passwordPilTexts,setpasswordPilTexts] = useState([
    { text: 'uppercase', isValid: false },
    { text: 'lowercase', isValid: false },
    { text: 'number', isValid: false },
    { text: '8+ characters', isValid: false },
  ])
  const [confirmPilTexts,setConfirmPilTexts] = useState([
    { text: 'matched', isValid: false}
  ])
  const [alert,setAlert] = useState(false)
  // method
  const submitHandler = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    console.log('reset password:',form)
    axios.post(ROOT_API + '/auth/reset-password', form, { headers: { 'x-auth-token' : token } })
      .then(res => res.data)
      .then(res => {
        setAlert({ type: 'success', message: res.message })
        setForm({ password:'', confirmPassword:'' })
        console.log(confirmPilTexts)
      })
      .catch(err => {
        setAlert({
          type: 'error',
          message: err.response.data.message
        })
      })
  }
  useEffect(()=>{
    const newpasswordPilTexts = passwordPilTexts.map((pilText,index)=>{
      if(index === 0) pilText.isValid = /(?=.*[A-Z])/.test(form.password)
      if(index === 1) pilText.isValid = /(?=.*[a-z])/.test(form.password)
      if(index === 2) pilText.isValid = /(?=.*[0-9])/.test(form.password)
      if(index === 3) pilText.isValid = form.password.length >= 8
      return pilText
    })
    const newConfirmPilTexts = confirmPilTexts.map((pilText,index)=>{
      if(index === 0){
        pilText.isValid = form.password === form.confirmPassword && form.confirmPassword !== ''
      }
      return pilText
    })
    setpasswordPilTexts(newpasswordPilTexts)
    setConfirmPilTexts(newConfirmPilTexts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[form])
  if(isTokenValid==null) return false
  return !isTokenValid ? (
    <InvalidToken/>
  ) : (
    <Container className='reset-password'>
      <Row className='h-100 justify-content-center'>
        <Col md='6' lg='4'>
          <Form className='p-3' onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Reset Password</h2>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="*********"
                value={form.password}
                onChange={(e)=>setForm({...form,password:e.target.value})}/>
              <div className='pil-text-wrapper mt-2'>
                {passwordPilTexts.map((pilText,index)=>{
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
              <div className='pil-text-wrapper mt-2'>
                {confirmPilTexts.map((pilText,index)=>{
                  return(
                    <PilText text={pilText.text} isValid={pilText.isValid} key={index}/>
                  )
                })}
              </div>
            </FormGroup>
            {alert && (
              <Alert 
                color={alert.type==='error'?'warning':'success'} 
                className='text-center upper-first py-1'
              >{alert.message}</Alert>
            )}
            <Button 
              type='submit' 
              color='primary' 
              className='btn-block mt-4' 
              disabled={passwordPilTexts.concat(confirmPilTexts).some(pilText=>pilText.isValid===false)}
            >Reset Password</Button>
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
