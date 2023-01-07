import React from 'react'
import './Videofooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';




function Videofooter({channel,description,song}) {
  return (
    <div className='video-footer'>
        <div className='video-footer-text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='video-footer-ticker'>
            <MusicNoteIcon className='video-footer-icon'/>
        </div>
        </div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPvva0UdvIhif-wHcGLQIU6NOodJHLENFoA&usqp=CAU'
      className='video-footer-record'/>
    </div>
  )
}

export default Videofooter
