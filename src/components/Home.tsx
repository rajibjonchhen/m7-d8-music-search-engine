import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ISong } from "../interfaces/ISong";
import DetailPage from "./DetailPage";
import SingleSong from "./SingleSong";

interface Song {
    song : ISong
}

function Home() {
    const [songs, setSongs] = useState<ISong[]>([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetchSongs()
    },[])

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    e.preventDefault()
    setSearch(e.target.value)
    }
    

    const fetchSongs = async() => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=whatever")
            if(response.ok){
                const {data} = await response.json()
                setSongs(data)
                console.log(data);
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <Container>
            <div>
                <input id='search' value={search} onChange={(e) => handleChange(e)} placeholder="type and enter"/>
            </div>
            <Row>
                <Col>
                    {songs.map (song => <SingleSong song={song} key={song.id}/>)}
                </Col>
              
            </Row>
        </Container>
     );
}

export default Home;