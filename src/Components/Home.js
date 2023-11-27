import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [contactData, setContactData] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8000/contacts')
    .then((res)=> setContactData(res.data))
    .catch((err)=>err)
},[])

const handleDelete=(id)=>{
    axios.delete('http://localhost:8000/contacts/'+id)
    .then((res)=>{navigate('/')
    // eslint-disable-next-line no-restricted-globals
    location.reload()}
    )
    .catch(err=> console.log(err))
}
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
        <h1>List of Contacts</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to='create' className='btn btn-sm btn-info'>+ Add</Link>
            </div> 
        <table className='table table-striped '>
            <thead className='aligns-items-center'>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contactData.map((info, index)=>
                (
<tr key={index}>
    <td>{info.id}</td>
    <td>{info.name}</td>
    <td>{info.phone}</td>
    <td>{info.email}</td>
    <td>
    <Link to={`/read/${info.id}`} className="btn btn-sm me-2 btn-primary"> Read </Link>
    <Link to={`/update/${info.id}`} className="btn btn-sm me-2 btn-secondary">Update</Link>
    <button onClick={(e)=>
    {   console.log(info.id,',..,');
    handleDelete(info.id)}} className="btn btn-sm me-2 btn-danger">Delete</button>
    </td>
</tr>
                )
                )}

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home