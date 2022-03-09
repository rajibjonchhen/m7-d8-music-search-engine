import { useEffect, useState } from "react";
import { Col, Container, ResponsiveEmbed, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Album, Artist, Contributor } from "../interfaces/ISong";
import Loader from "../Loader";

interface ITrack {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    isrc: string;
    link: string;
    share: string;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    release_date: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    bpm: number;
    gain: number;
    album?:Album;
    artist?:Artist;
    contributors?: Contributor[]
}

function DetailPage() {

    const params = useParams()
    const [song, setSong] = useState<ITrack>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        let id = params.id
        fetchSong(id)
    },[])

    const fetchSong = async(id: string | undefined) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                setSong(data)
                setIsLoading(false)
            } else {
                console.log('error on getting specific track')
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            
        }
    }
        return (
            <Container>
                        <p className='h1 mt-3 text-white'>{song?.title}</p>
                <Row>
                    <Col>
                        <div className='h-100 text-white d-flex'>
                            {isLoading? (<Loader/>) : (<div>
                            <div>
                                <img src={song?.album?.cover_big} alt={song?.title}/>
                            </div>
                        <p>Artist : <span className='h6'>{song?.artist?.name}</span></p>
                        <a href={song?.link} ><p>{song?.link}</p> </a>
                        <p></p>
                        </div>
                        )}
                        <div>
                        <p className='h3'>Contributors</p>
                    <div>

                    {song?.contributors?.map(contributor => 
                        <div className='text-left ml-3'>
                            <p>Name : {contributor.name}</p>
                            <p>Role : {contributor.role}</p>
                            <p>Link : {contributor.link}</p>
                            <p>TrackList : {contributor.tracklist}</p>
                        </div>
                    )}
                    </div>
                        </div>
                        </div>
                    
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container> 
     );
}

export default DetailPage;