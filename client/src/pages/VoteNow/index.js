import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GiannisAntetokounmpoImage, JimmyButlerImage, KlayThompsonImage, LebronJamesImage, LukaDoncicImage, StephenCurryImage } from '../../assets'
import { CandidateCard } from '../../components'

const VoteNow = () => {
  const [candidates] = useState([
    {name: 'Klay Thompson',age: 29,photo: KlayThompsonImage,motto: '60 points? easy...'},
    {name: 'Stephen Curry',age: 32,photo: StephenCurryImage,motto: 'I can do anything'},
    {name: 'Lebron James',age: 34,photo: LebronJamesImage,motto: 'Basketball isn\'t easy'},
    {name: 'Giannis Antetokounmpo',age: 27,photo: GiannisAntetokounmpoImage,motto: 'I wanna go to Warriors'},
    {name: 'Jimmy Butler',age: 31,photo: JimmyButlerImage,motto: 'Almost Sweep Bucks'},
    {name: 'Luka Doncic',age: 21,photo: LukaDoncicImage,motto: 'Dallas will win the championship'},
  ].sort((a, b)=>a.age < b.age ? -1 : 1))
  return (
    <div className='vote-now'>
      <Container>
        <Row className='justify-content-center mt-4'>
          <Col>
            <h1>Vote Now</h1>
          </Col>
        </Row>
        <Row className='mt-3 justify-content-center'>
          {candidates
            .map((candidate,index)=>{
              return(
                <Col lg='3' md='4' sm='6' className='my-3' key={index}>
                  <CandidateCard candidate={candidate}/>
                </Col>
              )
          })}
        </Row>
      </Container>
    </div>    
  )
}

export default VoteNow
