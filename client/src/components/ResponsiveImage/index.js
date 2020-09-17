import React from 'react'
import './responsive-image.scss'

const ResponesiveImage = ({src,alt,aspectRatio,borderRadius}) => {
  const styleWrapper = {
    paddingTop: aspectRatio || '100%',
    borderRadius: borderRadius || '50%'
  }
  return (
    <div className='responsive-image bg-light' style={styleWrapper}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default ResponesiveImage
