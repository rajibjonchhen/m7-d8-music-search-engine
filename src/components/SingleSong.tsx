import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ISong } from "../interfaces/ISong";

interface SingleSongProps {
    song : ISong
}
function SingleSong({song}:SingleSongProps) {
    return ( 
        <Col>
        <Link to={`/DetailPage/${song.id}`}>
        <div className='text-white pointer '>
            <img src={song.album?.cover_big} style={{width:'100px'}} alt={song.title}/>
            <p className='h6'>{song.title}</p>
            <p className=''>{song.rank}</p>    
        </div>
        </Link>
        </Col>
     );
}

export default SingleSong;