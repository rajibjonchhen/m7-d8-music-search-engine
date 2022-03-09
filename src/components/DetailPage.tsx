import { useEffect, useState } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Album, Artist } from "../interfaces/ISong";

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
                
            } 
        } catch (error) {
            console.log(error);
            
        }
    }
        return ( 
        <div>
            <div>
                <img src={song?.album?.cover} alt={song?.title}/>
            </div>
           <p>{song?.title}</p>
           <p></p>
        </div>
     );
}

export default DetailPage;