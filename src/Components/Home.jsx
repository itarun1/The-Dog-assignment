import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Home() {
    const [data, setData] = useState([])
    const [verification, setVerification] = useState('')
    let navigate = useNavigate()

    const [sortValue, setSortValue] = useState('')
    const sortOptions = ["costPerDay", "rating"]


    useEffect(() => {
        axios.get(`http://localhost:8080/pet/`)
            .then((res) => {
                console.log(res.data)
                setData(res.data);
                // console.log(details)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);


    const handleSort = async (e) => {
        let value = e.target.value
        setSortValue(value)
        await axios.get(`http://localhost:8080/pet?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
    }


    const verifiedFun = (method) => {
        setVerification(method)
        getVerified()
    }
    const getVerified = () => {
        fetch(`http://localhost:8080/pet?verified=${verification}`)
            .then((Response) => Response.json())
            .then((data) => setData(data));
    }


    return (
        <div className='maindiv'>
            <button onClick={() => navigate("/listing/create")}>Create</button>


            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Capacity</th>
                        <th>Cost Per Day</th>
                        <th>Verfied</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) =>
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td> <Link to={`/listing/${e.id}`} style={{ textDecoration: "none", color: "black" }}>{e.name}</Link></td>
                            <td>{e.city}</td>
                            <td>{e.address}</td>
                            <td>{e.capacity}</td>
                            <td>{e.costPerDay}</td>
                            <td>{e.verified}</td>
                            <td>{e.rating}</td>

                        </tr>
                    )}
                </tbody>
            </table>

            <div className="filter">
                <div className="f1">
                    <h5>Sort By:</h5>
                    <select style={{ width: "50%", borderRadius: "2px", height: '35px' }} onChange={handleSort} value={sortValue}>
                        <option>Select Value</option>
                        {sortOptions.map((e, i) => (
                            <option value={e} key={i}>{e}</option>
                        ))}
                    </select></div>
                <div className="f2">
                    <button onClick={() => { verifiedFun("Yes") }}>Yes</button>
                    <button onClick={() => { verifiedFun("No") }}>No</button></div>




            </div>
        </div>

    )
}
