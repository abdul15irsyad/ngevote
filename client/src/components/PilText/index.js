import React from 'react'
import './pil-text.scss'

const PilText = ({text,isValid}) => {
  isValid = isValid || false
  const style = {
    backgroundColor: isValid ? 'rgb(198, 255, 184)' : 'rgb(0,0,0,.03)',
    color: isValid ? 'rgba(0,0,0, .8)' : 'rgba(0,0,0, .3)'
  }
  return (
    <div className='pil-text text-capitalize mr-1 mb-1' style={style}>{text}</div>
  )
}

export default PilText
