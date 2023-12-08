import React,{useState,useEffect} from 'react'
import tmdbAxiosinstnce from '../tmdbAxiosInstance'
import './Row.css'

function Banner({fetchUrl}) {
    const [allMovies,setAllMovies] =useState([])
  const base_url_img= 'https://image.tmdb.org/t/p/original'
  const fetchData=async()=>{
    const response=await tmdbAxiosinstnce.get(fetchUrl)
    setAllMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    console.log(Math.floor(Math.random()*response.data.results.length))

  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(allMovies)

  return (
    <div style={{
        height:'550px', width:'100%',
        backgroundImage: `url(${base_url_img}${allMovies.backdrop_path})`, backgroundSize: 'cover', backgroundAttachment:'fixed'
    }}>
        <div className="banner-content">
            <h1>{allMovies?.name}</h1>
            <p className='b-over'>{allMovies?.first_air_date}  |  {allMovies?.original_language} | {allMovies?.vote_average}</p>
            <p>{allMovies?.overview}</p>
        </div>

    </div>
  )
}

export default Banner