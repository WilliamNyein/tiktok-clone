import React,{useRef,useState} from 'react'
import './Video.css'
import Videofooter from '../Videofooter/Videofooter';
import Videosidebar from '../Videosidebar/Videosidebar';

function Video({url,description,song,channel,likes,
                comments,shares}) {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null)
    const handlePressclick = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
  return (
    <div className='video'>
        <video 
        onClick={handlePressclick}
        ref={videoRef}
        loop
        className='video-player'
        src={url}></video>

    <Videofooter channel={channel} song={song} 
    description={description}/>
    <Videosidebar likes={likes} comments={comments} shares={shares}/>
    </div>
  )
}

export default Video
