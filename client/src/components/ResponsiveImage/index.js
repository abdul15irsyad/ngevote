import React from 'react'
import './responsive-image.scss'

const ResponesiveImage = ({src,alt,aspectRatio,borderRadius,objectFit}) => {
  const styleWrapper = {
    paddingTop: aspectRatio || '100%',
    borderRadius: borderRadius || '50%',
  }
  const styleImage = {
    objectFit: objectFit || 'cover'
  }
  return (
    <div className='responsive-image bg-light' style={styleWrapper}>
      <img src={src} alt={alt} style={styleImage}/>
    </div>
  )
}

export default ResponesiveImage
