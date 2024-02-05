import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './New.css'

const Detail = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setdata]=useState('')
useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
        console.log(response);
        setdata(response.data)
    }
    fetchdata()
},[])

   
  return (
    <section className='three'>
      <div className='box3'>
        <h1>{data.Title}</h1>
        <h3>{data.Actors}</h3>
        <img src={data.Poster} alt="" style={{width:'50%'}} />
    </div>
    </section>
  )
}

export default Detail
