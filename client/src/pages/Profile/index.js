import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Alert, Button, Col, Container, Row } from 'reactstrap'
import { DefaultImage } from '../../assets'
import ResponesiveImage from '../../components/ResponsiveImage'
import { ROOT_API } from '../../config/api-config'
import './profile.scss'

const Profile = () => {
  // state
  const { username } = useParams()
  const [user,setUser] = useState({})
  const [isUser,setIsUser] = useState(undefined)
  useEffect(()=>{
    axios.get(ROOT_API+'/user',{ params: { username } })
      .then(res => res.data)
      .then(res =>{
        setUser(res.data)
        setIsUser(true)
      })
      .catch(err => {
        setIsUser(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[username])
  if(isUser===undefined) return false
  return (
    <div className='Profile'>
      {user.username ? (
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
                  <h3 className='text-capitalize mb-0'>{user.name}</h3>
                  <p className='mb-0 text-secondary'>{user.username} {user.age && `. ${user.age} years old` } </p>
                  <p className='mb-3 text-secondary'>{user.email}</p>
                  <Button tag={Link} to='/profile/edit' color='primary' className='btn-edit-profile mt-auto'>Edit Profile</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Container>
          <Row className='justify-content-center'>
            <Col md='6' lg='4'>
              <Alert color='warning' className='text-center mt-5'>User not found.</Alert>
            </Col>
          </Row>
        </Container>
      )}
      {user.isCandidate && (
        <div className='detail-Alertrofile'>
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
      )}
    </div>
  )
}

export default Profile
