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
        <Card style={{ width: '12rem' }} className='mt-3'>
            <Card.Img variant="top" src={song.album?.cover_big}  alt={song.title}/>
          
            <Card.Body>
            <p className='h6'>{song.title}</p>
                <Card.Text>
                
                <p className=''> <small>Rank : {song.rank}</small></p>    
           
                </Card.Text>
                
            </Card.Body>
            </Card>
    
        </Link>
        </Col>
     );
}

export default SingleSong;