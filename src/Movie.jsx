import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './New.css'

export const Movie = () => {
    const [title,setTitle]=useState()
    const [data,setData]=useState([])

    const handleChange=(event)=>{
        setTitle(event.target.value)

    }
    const handleSubmit=async()=>{
        setTitle(title)
        let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
        console.log(response.data.Search);
        setData(response.data.Search)

    }
  return (
    <>
        <section>
             <div className='one'>
                <h1>MOVIE APP</h1>
                 <input type="text" name="" onChange={handleChange} placeholder='enter movie name' id=""/>
                 <button onClick={handleSubmit}>search</button>
             </div>
             {data &&
             <div className='mainbox'>
             {data.map((item)=>(
               <>
              <div className='box'>
              <Link to={`/detail/${item.imdbID}`}> <img src={item.Poster} alt="" style={{width:'30%'}} /></Link>
              <h2>{item.Title}</h2>
              </div>
             </>
             ))}
            </div>
            }
            </section>
    </>
    
  )
}