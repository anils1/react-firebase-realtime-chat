import React from 'react'
import Dhoni from '../image/Dhoni.jpeg';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Search here to chat..' />
      </div>
      <div className='userChat'>
      <img src={Dhoni} alt='image' />
        <div className='userChatInfo'>
          <span>rahul</span>
        </div>
      </div>
    </div>
  )
}

export default Search
