import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ISong } from "../interfaces/ISong";

interface SingleSongProps {
    song : ISong
}
function SingleSong({song}:SingleSongProps) {
    return ( 
        <Col>
        <Link to={`/DetailPage/${song.id}`}>
        <Card  className='single-card mt-3 text-left'>
            <Card.Img variant="top" src={song.album?.cover_big}  alt={song.title}/>
          
            <Card.Body >
                <p className='' style={{fontSize:'10px'}}>Rank : {song.rank}</p>    
            <p className='h6'>{song.title}</p>
                <Card.Text>
                
           
                </Card.Text>
                
            </Card.Body>
            </Card>
    
        </Link>
        </Col>
     );
}

export default SingleSong;