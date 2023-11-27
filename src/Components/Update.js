import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    axios.get('http://localhost:8000/contacts/'+id)
    .then((res)=> setValues(res.data))
    .catch((err)=> console.log(err))
  },[])

  const handleUpdate= (e) => {
  e.preventDefault();
  axios.put('http://localhost:8000/contacts/'+id, values)
  .then(navigate('/'))
  .catch((err)=> console.log(err))
  }

  return (
    <div className='d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h2>Update</h2>
    <form onSubmit={handleUpdate} >
<div className='mb-2'>
<label htmlFor='name'>Name:</label>
<input type='text' name='name' className='form-control' placeholder='Enter Name' value={values.name} onChange={e =>{
  setValues({...values, name: e.target.value})
}}></input>
</div>
<div className='mb-2'>
<label htmlFor='email'>Email:</label>
<input type='email' name='email' className='form-control' placeholder='Enter Email' value={values.email} onChange={e=>{
  setValues({...values, email: e.target.value})
}}></input>
</div>
<div className='mb-2'>
<label htmlFor='phone'>phone:</label>
<input type='text' name='phone' className='form-control' placeholder='Enter Phone' value={values.phone} onChange={e=>{
  setValues({...values, phone: e.target.value})
}}></input>
</div>
<button className='btn btn-success'>Update</button>
<Link to='/' className='btn btn-warning ms-3'>Back</Link>
    </form>
    </div>
    </div>
  )
}

export default Update;