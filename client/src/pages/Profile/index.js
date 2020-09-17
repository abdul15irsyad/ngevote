import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { DefaultImage } from '../../assets'
import ResponesiveImage from '../../components/ResponsiveImage'
import './profile.scss'

const Profile = () => {
  const user = {
    name: 'Irsyad Abdul Hamid D',
    email: 'abdulirsyad15@gmail.com',
    job: 'Student',
    at: 'Jakarta State Islamic University',
    age: 22,
  }
  return (
    <div className='Profile'>
      <div className='top-profile'>
        <Container className='pt-4 pb-5'>
          <Row className='justify-content-center'>
            <Col md='4' lg='3' className='pb-3'>
              <div className='image-profile px-4'>
                <ResponesiveImage src={DefaultImage} alt='profile'/>
              </div>
            </Col>
            <Col md='7' className='align-self-center pb-3'>
              <div className='text-profile text-center p-3'>
                <h3>{user.name}</h3>
                <h5>{user.job} at <b>{user.at}</b></h5>
                <p>{user.age} years old</p>
                <Button color='primary' className='px-5'>Edit Profile</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Profile
