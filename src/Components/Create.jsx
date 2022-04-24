import {useState} from "react";
import axios from "axios"


export const Forms=()=>{
    const [formData, setFormData]=useState({
        name:'',
        city:'',
        address:"",
        capacity:'',
        costPerDay:"",
        verified:'',
        rating:'',
         title:"",
        petWatched:"",
        leftUnsupervised:"",
        sleep:'',
        petTypes:'',
         petSize:"",
         adultSupervision:"",
         numberOfWalks:"",
         emergencyTransport:"",
 
    })
    

const change=(e)=>{
    const {id,value}=e.target

    setFormData({
        ...formData,
        [id]:value,
    })
    
}
 
const submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8080/pet',formData).then(()=>{
        alert("details updated")
        setFormData({
         name:'',
        city:'',
        address:"",
        capacity:'',
        costPerDay:"",
        verified:'',
        rating:'',
            title:"",
            petWatched:"",
            leftUnsupervised:"",
            sleep:'',
            petTypes:'',
            petSize:"",
            adultSupervision:"",
            numberOfWalks:"",
            emergencyTransport:"",
        })
    })


}
return(
    <>
    <form onSubmit={submit} style={{marginLeft:"300px"}}>
        <h3>HOTEL DETAILS</h3>

        <h6>NAME</h6>
        <input value={formData.name} id='name' type='text' onChange={change} />

        <h6>CITY</h6>
        <input value={formData.city} id='city' type='text' onChange={change} />

        <h6>ADDRESS</h6>
        <input value={formData.address} id='address' type='text' onChange={change} />
 
         <h6>CAPACITY</h6>
        <input value={formData.capacity} id='capacity' type='text' onChange={change} />

        <h6>COST PER DAY</h6>
        <input value={formData.costPerDay} id='costPerDay' type='text' onChange={change} />

        <h6>VERIFIED</h6>
        <input value={formData.verified} id='verified' type='text' onChange={change} />

        <h6>RATING</h6>
        <input value={formData.rating} id='rating' type='text' onChange={change} />

        <h1>Summary Of Hotel</h1>
 
         <h6>TITLE</h6>
        <input value={formData.title} id='title' type='text' onChange={change} />

        <h6>HOW MANY PETS CAN WATCH?</h6>
        <input value={formData.petWatched} id='petWatched' type='text' onChange={change} />

        <h6>IF LEFT UNSUPERVISED?</h6>
        <input value={formData.leftUnsupervised} id='leftUnsupervised' type='text' onChange={change} />

        <h6>SLEEP</h6>
        <input value={formData.sleep} id='sleep' type='text' onChange={change} />
 
         <h6>PET TYPE</h6>
        <input value={formData.petTypes} id='petTypes' type='text' onChange={change} />

        <h6>PET SIZE</h6>
        <input value={formData.petSize} id='petSize' type='text' onChange={change} />

        <h6>ADULT SUPERVISION</h6>
        <input value={formData.adultSupervision} id='adultSupervision' type='text' onChange={change} />

        <h6>NUMBER OF WALKS PER DAY</h6>
        <input value={formData.numberOfWalks} id='numberOfWalks' type='text' onChange={change} />
 
         <h6>EMERGENCY TRANSPORT?</h6>
        <input value={formData.emergencyTransport} id='emergencyTransport' type='text' onChange={change} />
         
        
        <br></br>

        <input type="submit" value={"Save"} />
    </form>

    </>
)
}


