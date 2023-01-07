import React,{useState} from 'react'
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Videosidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Videosidebar({likes,comments,shares}) {
    const [like,setLike] = useState(false);
  return (
    <div className='video-sidebar'>
        <div className='siebar-button'>
            {like?<FavoriteIcon fontSize='large'/> :
            <FavoriteBorderIcon onClick={()=>setLike(!like)}/>}
            <p>{likes}</p>
        </div>
        <div className='siebar-button'>
            <CommentIcon fontSize='large'/>
            <p>{comments}</p>
        </div>
        <div className='siebar-button'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
      
    </div>
  )
}

export default Videosidebar
