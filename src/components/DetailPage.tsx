import { useEffect, useState } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Album, Artist } from "../interfaces/ISong";
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
    artist?:Artist
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
        <div className='h-100 text-white'>
            {isLoading? (<Loader/>) : (<div>
            <div>
                <img src={song?.album?.cover} alt={song?.title}/>
            </div>
           <p>{song?.title}</p>
           <p>{song?.artist?.name}</p>
          <a href={song?.link} ><p>{song?.link}</p> </a>
           <p></p>
        </div>
           )}
        </div>
     );
}

export default DetailPage;