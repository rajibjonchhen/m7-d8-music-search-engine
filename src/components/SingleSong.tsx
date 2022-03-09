import { ISong } from "../interfaces/ISong";

interface SingleSongProps {
    song : ISong
}
function SingleSong({song}:SingleSongProps) {
    return ( 
        <div className=''>
            <p className='h4'>{song.title}</p>
            <p className=''>{song.rank}</p>
            
        </div>
     );
}

export default SingleSong;