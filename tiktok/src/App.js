import './App.css';
import Video from './Video/Video';
import { useEffect,useState } from 'react';
import axios from './axios'


function App() {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    async function fetchVideos(){
      const response = await axios.get('/v2/posts')
      setVideos(response.data)

      return response;
    }
    fetchVideos()
  },[])
  console.log(videos)

  return (
    <div className="app">

     <div className='app-videos'>
      {videos.map(({url,channel,description,likes,comments,shares,
      song})=>
     <Video url={url}
     channel={channel} song={song} 
     description={description}
     likes={likes} comments={comments} shares={shares}/>)}
     </div>
    </div>
  );
}

export default App;
