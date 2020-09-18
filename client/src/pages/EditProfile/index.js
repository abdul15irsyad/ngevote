import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const EditProfile = () => {
  const history = useHistory()
  const [form,setForm] = useState({
    name: '',
    username: '',
    email: '',
    age: ''
  })
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('edit profile:',form)
    history.push('/profile/abdul15irsyad')
  }
  return (
    <Container className='edit-profile'>
      <Row className='justify-content-center mt-4'>
        <Col lg='10' md='12'>
          <h1>Edit Profile</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col lg='10' md='12'>
          <Form className='p-3' onSubmit={submitHandler}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input 
                type="text" id="name" placeholder="eg: John Doe" 
                value={form.name} 
                onChange={(e)=>{setForm({...form,name:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                type="text" id="username" placeholder="eg: example@email.com" 
                value={form.username} 
                onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email" id="email" placeholder="eg: johndoe8" 
                value={form.email} 
                onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input 
                type="number" id="age" placeholder="Your Age" 
                value={form.age} 
                onChange={(e)=>{setForm({...form,age:e.target.value})}}/>
            </FormGroup>
            <div className="button-section d-flex justify-content-end">
              <Button tag={Link} to='/profile/abdul15irsyad' className='mr-1'>Cancel</Button>
              <Button type='submit' color='primary' className='px-4 ml-1'>Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditProfile
