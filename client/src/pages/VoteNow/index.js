import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GiannisAntetokounmpoImage, JimmyButlerImage, KlayThompsonImage, LebronJamesImage, LukaDoncicImage, StephenCurryImage } from '../../assets'
import { CandidateCard } from '../../components'

const Candidates = () => {
  const candidates = [
    {name: 'Klay Thompson',age: 29,photo: KlayThompsonImage,motto: '60 points? easy...'},
    {name: 'Stephen Curry',age: 32,photo: StephenCurryImage,motto: 'I can do anything'},
    {name: 'Lebron James',age: 34,photo: LebronJamesImage,motto: 'Basketball isn\'t easy'},
    {name: 'Giannis Antetokounmpo',age: 27,photo: GiannisAntetokounmpoImage,motto: 'I wanna go to Warriors'},
    {name: 'Jimmy Butler',age: 31,photo: JimmyButlerImage,motto: 'Almost Sweep Bucks'},
    {name: 'Luka Doncic',age: 21,photo: LukaDoncicImage,motto: 'Dallas will win the championship'},
  ]
  return (
    <div className='candidates'>
      <Container>
        <Row className='mt-3 justify-content-center'>
          {candidates
            .sort((a, b)=>a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            .map((candidate,index)=>{
              return(
                <Col key={index} lg='3' md='4' sm='6' className='my-3'>
                  <CandidateCard candidate={candidate}/>
                </Col>
              )
          })}
        </Row>
      </Container>
    </div>    
  )
}

export default Candidates
