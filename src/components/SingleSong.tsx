import { Link } from "react-router-dom";
import { ISong } from "../interfaces/ISong";

interface SingleSongProps {
    song : ISong
}
function SingleSong({song}:SingleSongProps) {
    return ( 
        <Link to={`/DetailPage/${song.id}`}>
        <div className=''>
            <p className='h4'>{song.title}</p>
            <p className=''>{song.rank}</p>    
        </div>
        </Link>
     );
}

export default SingleSong;