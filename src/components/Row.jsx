import React,{useState,useEffect} from 'react'
import tmdbAxiosinstnce from '../tmdbAxiosInstance'
import './Row.css'
import './Banner.css'

function Row({title,fetchUrl}) {
  const [allMovies,setAllMovies] =useState([])
  const base_url_img= 'https://image.tmdb.org/t/p/original'
  const fetchData=async()=>{
    const response=await tmdbAxiosinstnce.get(fetchUrl)
    // console.log(response.data.results)
    setAllMovies(response.data.results)
  }

  // fetchdata()
  // console.log(fetchUrl)
  useEffect(()=>{
    fetchData()
  },[])
  console.log(allMovies)
  return (
    <div className='row'>
        <h4>{title}</h4>
        <div className='movies-row'>
          {
            allMovies?.map(item=>(
              <img className='movies-img' src={`${base_url_img}${item.backdrop_path}`} alt="no img" />
              
            ))
          }
        </div>
    </div>
    
  )
}

export default Row