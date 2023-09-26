import React,{useState, useEffect} from 'react'
import './Bannar.css'
import tmdAxiosIns from '../tmdbAxiosIns';

function Bannar({fetchUrl}) {
  const [Movie,setMovie] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fechData = async ()=>{
    const {data} = await tmdAxiosIns.get(fetchUrl)
    console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
  }

console.log(Movie);
  useEffect(()=>{
    fechData()
  },[])
  return (
    <div>Bannar</div>
  )
}

export default Bannar