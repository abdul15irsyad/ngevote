import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText
} from 'reactstrap'
import './candidate-card.scss'

const CandidateCard = ({candidate}) => {
  const name = candidate.name.split(' ')
  return (
    <Card className='candidate-card h-100'>
      <CardImg top width="100%" src={candidate.photo} alt="Card image cap" />
      <CardBody className='text-center'>
        <h4 className='mb-0'>{name[0]}</h4><h5>{name[1]}</h5>
        <span className='text-secondary'>{candidate.age} years old</span>
        <CardText><i>"{candidate.motto}"</i></CardText>
      </CardBody>
      <div className='footer'>
        <Button color='primary' className='btn-block btn-vote'>Vote</Button>
      </div>
    </Card>
  )
}

export default CandidateCard
