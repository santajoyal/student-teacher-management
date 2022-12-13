import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Viewteacher() {
    
    let navigate =useNavigate()
    let params = useParams()
    const [data,setData] = useState({})

    useEffect(()=>{
     async function fetchdata(){
        try {
         const response = await axios.get(`https://6346c13f9eb7f8c0f884b683.mockapi.io/teachers/${params.id}`)   
         setData(response.data)
        } catch (error) {
            alert("error")
        }
     }
     fetchdata()
    },[])
 
    let back = ()=>{
        navigate("/teachers")
    }
    
  return (
   <>
   <button className='btn btn-primary ml-3' onClick={back}>Back to Teachers</button>
   <div className='App'>
       <h1>Teacher Details</h1> 
       <h1>Id: {data.id}</h1>
       <h1>Nmae: {data.name} </h1>
       <h1>Age: {data.age}</h1>
       <h1>Gender: {data.gender}</h1>
       <h1>Subject: {data.subject}</h1>
    </div>
   </>
  )
}

export default Viewteacher