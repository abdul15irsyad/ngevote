import React, { useContext,  useEffect,  useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ModalTemplate } from '../../components'
import { AuthContext } from '../../context/AuthContext/authContext'
import { ROOT_API } from '../../config/api-config'

const EditProfile = () => {
  const history = useHistory()
  const { auth, dispatch } = useContext(AuthContext)
  const [form,setForm] = useState(auth.user)
  const [modal,setModal] = useState(false)
  const [errors,setErrors] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setErrors([])
    if(!isChange){
      axios.patch(`${ROOT_API}/user/${auth.user._id}/profile`,form,{
        headers:{
          'old-username' : auth.user.username,
          'old-email': auth.user.email
        }
      }).then(res=>res.data).then(res=>{
        dispatch({type:'EDIT_USER',user:form})
        history.push(`/profile/${form.username}`)
      })
      .catch(err=>{
        setErrors(err.response.data.errors)
      })
    }else history.push(`/profile/${auth.user.username}`)
  }
  const cancelHandler = (e) => {
    e.preventDefault()
    if(isChange) history.push(`/profile/${auth.user.username}`)
    else setModal(true)
  }
  const isChange = JSON.stringify(auth.user)===JSON.stringify(form)
  const modalHandler = () => {
    history.push(`/profile/${auth.user.username}`)
  }
  const findError = param => {
    return errors.find(error=>error.param===param)
  }
  useEffect(()=>{
    // console.log(errors)
  },[errors])
  return (
    <Container className='edit-profile'>
      <ModalTemplate modal={modal} setModal={setModal} modalHandler={modalHandler} className='modal-dont-saved'/>
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
                type="text" id="name" placeholder="John Doe" 
                value={form.name} 
                onChange={(e)=>{setForm({...form,name:e.target.value})}}/>
              {findError('name') && (
                <small className='text-danger ml-2'>{findError('name').msg}</small>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                type="text" id="username" placeholder="johndoe8" 
                value={form.username} 
                onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
              {findError('username') && (
                <small className='text-danger ml-2'>{findError('username').msg}</small>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="text" id="email" placeholder="example@email.com" 
                value={form.email} 
                onChange={(e)=>{setForm({...form,email:e.target.value})}}/>
              {findError('email') && (
                <small className='text-danger ml-2'>{findError('email').msg}</small>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input 
                type="number" id="age" placeholder="Your Age" 
                value={form.age} 
                onChange={(e)=>{setForm({...form,age:e.target.value})}}/>
              {findError('age') && (
                <small className='text-danger ml-2'>{findError('age').msg}</small>
              )}
            </FormGroup>
            <div className="button-section d-flex justify-content-end">
              <Button onClick={cancelHandler} color='light' className='mr-1'>Cancel</Button>
              <Button type='submit' color='primary' className='px-4 ml-1'>Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditProfile
