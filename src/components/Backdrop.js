import React from 'react'

const Backdrop = ({closeModalHandler}) => {
    
  return (
    <div className='backdrop' onClick={closeModalHandler}/>
  )
}

export default Backdrop