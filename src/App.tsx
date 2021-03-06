import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DetailPage from './components/DetailPage';
import MyNavbar from './components/MyNavbar';
import { ISong } from './interfaces/ISong';
import './style.css'
interface Song {
  song : ISong
}

function App() {
  const[search, setSearch] = useState("whatever")
  const [songs, setSongs] = useState<ISong[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
      if(search.length>2){
        console.log(search);
        fetchSongs(search)
      }
    },[search])


    const fetchSongs = async(search:string) => {
      try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`)
          if(response.ok){
              const {data} = await response.json()
              setSongs(data)
              console.log(data);
              setIsLoading(false)
              
          }else{
              console.log('error on fetching songs')
              setIsLoading(false)
              setErrMsg("Error on fetching songs")
          }
      } catch (error) {
          console.log(error)
          setIsLoading(false)
      }
  }

  return (
    <BrowserRouter>
      <div className="App bg-dark h-100" style={{minHeight:'100vh'}}>
        <MyNavbar search={search} setSearch={setSearch}  fetchSongs={fetchSongs}/>
      <Routes>
        <Route path='/' element={<Home songs={songs} isLoading={isLoading}/>}/>
        <Route path='/DetailPage/:id' element={<DetailPage/>}/>
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
