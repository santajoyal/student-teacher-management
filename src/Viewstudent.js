import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Viewstudent() {

    let navigate =useNavigate()
    let params = useParams()
    const [data,setData] = useState({})

    useEffect(()=>{
     async function fetchdata(){
        try {
         const response = await axios.get(`https://6346c13f9eb7f8c0f884b683.mockapi.io/students/${params.id}`)   
         setData(response.data)
        } catch (error) {
            alert("error")
        }
     }
     fetchdata()
    },[])
 
    let back = ()=>{
        navigate("/students")
    }
  return (
   <>
    <button className='btn btn-primary ml-3' onClick={back}>Back to Students</button>
   <div className='App'>
       <h1>Student Details</h1> 
       <h1>Roll-Number: {data.rollnumber}</h1>
       <h1>Nmae: {data.name} </h1>
       <h1>Age: {data.age}</h1>
       <h1>Gender: {data.gender}</h1>
       <h1>Class: {data.class}</h1>
       <h1>Grade: {data.grade}</h1>
    </div>
   </>
  )
}

export default Viewstudent