import React from 'react';
import Attachment from '../image/Attachment.png';
import AddProfile from '../image/AddProfile.png';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" name="" placeholder='Type here..' />
      <div className='send'>
        <img src={Attachment} alt="" />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;
