import React from 'react'
import "./forminput.css"
import { useState } from 'react';
import { userauthenticate } from '../api';

const FormInput = () => {

  const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email:'',
    password: '',
    phone:'',
}

  const [values, setValues] = useState(signupInitialValues);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const signUpUser = async(e)=>{
    let response = await userauthenticate(values);
    if(!response) return;
    console.log("signup successfull")
}

  return (
    <div className='formInput'>
<form>
  <h1>SignUp</h1>
        <input
          onChange={(e) => onInputChange(e)}
          name="firstname"
          placeholder="Enter First Name"
        />


        <input
          onChange={(e) => onInputChange(e)}
          name="lastname"
          placeholder="Enter Last Name"
        />

        <input
          onChange={(e) => onInputChange(e)}
          name="username"
          placeholder="Enter UserName"
        />

        <input
          onChange={(e) => onInputChange(e)}
          name="email"
          placeholder="Enter Email"
        />

        <input
          onChange={(e) => onInputChange(e)}
          name="password"
          placeholder="Enter Password"
        />

        <input
          onChange={(e) => onInputChange(e)}
          name="phone"
          placeholder="Enter Phone"
        />

        <button onClick={()=>signUpUser()} >Continue</button>
        </form>
    </div>
  )
}

export default FormInput    