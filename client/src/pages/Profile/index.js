import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { DefaultImage } from '../../assets'
import ResponesiveImage from '../../components/ResponsiveImage'
import './profile.scss'

const Profile = () => {
  const {username} = useParams()
  const [user] = useState({
    name: 'Irsyad Abdul Hamid D',
    username,
    email: 'abdulirsyad15@gmail.com',
    age: 22,
  })
  return (
    <div className='Profile'>
      <div className='top-profile'>
        <Container className='pt-4 pb-5'>
          <Row className='justify-content-center'>
            <Col md='4' lg='3' className='pb-3'>
              <div className='image-profile px-4'>
                <ResponesiveImage src={user.image || DefaultImage} alt='profile'/>
              </div>
            </Col>
            <Col md='8' className='pb-3'>
              <div className='text-profile d-flex flex-column h-100 p-3'>
                <h3 className='mb-0'>{user.name}</h3>
                <p className='mb-3 text-secondary'>{user.username} . {user.age} years old</p>
                <Button tag={Link} to='/profile/abdul15irsyad/edit' color='primary' className='btn-edit-profile mt-auto'>Edit Profile</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='detail-profile'>
        <Container className='py-3'>
          <Row>
            <Col lg='9'>
              <div className="achievement py-3">
                <div className='title-detail rounded mb-2'>
                  <h5 className='mb-0'>Achievement</h5>
                </div>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div className="history py-3">
                <div className='title-detail rounded mb-2'>
                  <h5 className='mb-0'>History</h5>
                </div>
                <p>&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt asperiores voluptates quos nihil ratione officiis molestias unde laborum, harum officia culpa eum ipsa blanditiis voluptate, nisi aspernatur fugiat mollitia.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Profile
