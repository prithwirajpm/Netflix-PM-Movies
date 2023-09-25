import React, { useEffect, useState } from 'react'
import tmdAxiosIns from '../tmdbAxiosIns'

function Row({title,fetchUrl}) {
  const [allMovies,setAllMovies] = useState()
  const fechData = async ()=>{
    const {data} = await tmdAxiosIns.get(fetchUrl)
    setAllMovies(data.results)
  }

console.log(allMovies);
  useEffect(()=>{
    fechData()
  },[])
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Row;