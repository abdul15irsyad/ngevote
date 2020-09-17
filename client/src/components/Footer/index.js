import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='Footer'>
      <p className='text-center mb-0 py-3'>
        <span>Copy Right &copy; {year} </span>
        <a href='https://github.com/abdul15irsyad' className='text-dark' target='_blank' rel="noopener noreferrer">Irsyad Abdul</a>
      </p>
    </div>
  )
}

export default Footer
