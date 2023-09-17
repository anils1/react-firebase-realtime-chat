import React from 'react'
import Dhoni from '../image/Dhoni.jpeg';

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
      <img src={Dhoni} alt='image' />
        <div className='userChatInfo'>
          <span>Vivek</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
      <img src={Dhoni} alt='image' />
        <div className='userChatInfo'>
          <span>Mohan</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
      <img src={Dhoni} alt='image' />
        <div className='userChatInfo'>
          <span>Shreya</span>
          <p>yes</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;
