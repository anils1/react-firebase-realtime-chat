import React from 'react'
import Dhoni from '../image/Dhoni.jpeg';

const Message = () => {
  return (
    <div className='message'>
      <div className='messageInfo'>
        <img src={Dhoni} alt='image' />
        <span>just now</span>
        <div className='messageContent'>
          <p>how are you</p>
          <img src={Dhoni} alt='image' />
        </div>
      </div>
    </div>
  )
}

export default Message
