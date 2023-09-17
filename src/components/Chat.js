import React from 'react'
import AudioCall from '../image/AudioCall.png';
import VideoCall from '../image/VideoCall.png';
import ThreeDot from '../image/ThreeDot.png';
import Input from './Input';
import Messages from './Messages';


const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Rahul</span>
        <div className='chatIcons'>
          <img src={AudioCall} alt="" />
          <img src={VideoCall} alt="" />
          <img src={ThreeDot} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat
