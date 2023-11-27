import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const Navigate =  useNavigate();
    const [values, setValues] = useState({
        name:'',
        phone:'',
        email:''
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/contacts', values)
        .then((res)=>{ Navigate('/')
        return console.log(res); }
            )
        .catch((err)=> console.log(err))
        
    }
  return (
    <div className='d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h2>Create a new contact</h2>
    <form  onSubmit={handleSubmit}>
<div className='mb-2'>
<label htmlFor='name'>Name:</label>
<input type='text' name='name' className='form-control' placeholder='Enter Name' onChange={e=>(setValues({...values, name:e.target.value}))} ></input>
</div>

<div className='mb-2'>
<label htmlFor='email'>Email:</label>
<input type='email' name='email' className='form-control' placeholder='Enter Email' onChange={e=>setValues({...values, email:e.target.value})}></input>
</div>
<div className='mb-2'>
<label htmlFor='phone'>phone:</label>
<input type='text' name='phone' className='form-control' placeholder='Enter Phone' onChange={e=>setValues({...values, phone:e.target.value})}></input>
</div>
<button className='btn btn-success'> Submit</button>
<Link to='/' className='btn btn-warning ms-3'>Back</Link>
    </form>
    </div>
    </div>
  )
}

export default Create