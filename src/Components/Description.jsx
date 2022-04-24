import  { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Description() {
  const {id} = useParams()
const [details,setDetails] = useState([])


useEffect(() => {
        axios.get(`http://localhost:8080/pet/${id}`)
        .then((res)=>{
            // console.log(res.data)
            setDetails({...res.data});
            // console.log(details)
        })
        .catch((err)=>{
            console.log(err)
        })
},[]);


  return (
      <>
      <h1 className='det'> Details</h1>
           <div className="detailsCard">
               <h6>Title: {details.title}</h6>
               <hr></hr>
               <h6>Pet Watched: {details.petWatched}</h6>
               <hr></hr>
               <h6>If Left Unsupervised: {details.leftUnsupervised}</h6>
               <hr></hr>
               <h6>Sleep: {details.sleep}</h6>
               <hr></hr>
               <h6>Pet Types: {details.petTypes}</h6>
               <hr></hr>
               <h6>Pet Size: {details.petSize}</h6>
               <hr></hr>
               <h6>Is there any Adult Supervision: {details.adultSupervision}</h6>
               <hr></hr>
               <h6>Number of Walks: {details.numberOfWalks}</h6>
               <hr></hr>
               <h6>Emergency Transport: {details.emergencyTransport}</h6>
               
           

           </div>
      </>
  )
}
