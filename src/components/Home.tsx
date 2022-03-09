import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ISong } from "../interfaces/ISong";
import Loader from "../Loader";
import DetailPage from "./DetailPage";
import SingleSong from "./SingleSong";

interface HomeSongsProp {
    songs : ISong[],
    isLoading:boolean
}

function Home({songs, isLoading}:HomeSongsProp) {
  
    

 

    return ( 
        <Container className='mt-3'>
            
            <Row>
                    {isLoading? (<Loader/>) : songs?.map (song => <SingleSong song={song} key={song.id}/>)}
              
            </Row>
        </Container>
     );
}

export default Home;