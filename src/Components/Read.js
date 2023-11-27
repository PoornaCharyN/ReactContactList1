import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const [values, setValues] = useState([]);
  const {id} =  useParams();

  useEffect(() =>{
    axios.get('http://localhost:8000/contacts/'+id)
    .then((res)=> setValues(res.data))
    .catch((err)=> err)
  },[]) 
  return (
    
      <div className='d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h2>Contact Details</h2>
    <div className='mb-2'>
<strong>Name: {values.name}</strong>
    </div>
    <div className='mb-2'>
<strong>email: {values.email}</strong>
    </div>
    <div className='mb-2'>
<strong>Phone: {values.phone}</strong>
    </div>
    <Link to={`/update/${id}`}  className='btn btn-success me-2'>Edit</Link>
    <Link to={`/`} className='btn btn-warning me-2'> Back</Link>
    </div>
    </div>
    )
}

export default Read