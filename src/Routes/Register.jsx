import React from 'react'
import styles from '../Components/Navbar.module.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
import { useState } from 'react';
const initState = {
  email:"",
  password:""
}
const Register = () => {
  const [formData,setFormData] = useState(initState);
  const [users,setUsers] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setUsers([...users, formData]);
    
    if(formData.email===""){
      alert("Please Enter Your Email")
    }else if(formData.password===""){
      alert("Please set Your password")
    }else if(formData.password.length<6){
      alert("Password should be 6 digit")
    }else{
      alert("You have successfully Register")
      setUsers([]);
      setFormData([]);
    }
    
  };

  console.log(formData);
  return (
    <>
    <div>
      <div className={styles.regi_1}>
        <h1>Create Your Account</h1>
        <p>Sign up to access Google Digital Garage free online courses</p>
      </div>
      <div className={styles.regi_2}>
        <div>
          <div>
             <div>
              <img src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/google-button-g.png" alt="" />
              <p>Register with Google</p>
              </div>
              <p>Or Continue with Google</p>
              <div>
              <FormControl>
                <FormLabel color='grey'>Email address</FormLabel>
                <Input name='email' onChange={handleChange} h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' type='email' placeholder='Enter Your Email' />
                <FormHelperText color='grey' ml={-199}>We'll never share your email.</FormHelperText>
                <br />
                <FormLabel color='grey'>Choose a Password </FormLabel>
                <Input name='password' onChange={handleChange} h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' type='password' placeholder='Enter Your Password' />
              </FormControl>
              </div>
              <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>

          </div>
          
        </div>
        <div>
          <p>Already have an account <Link to='/signin'>Sign in</Link> </p>
          <Button onClick={handleSubmit}>Continue</Button>
        </div>
      </div>
    </div>

     <Footer />
     </>
  )
}

export default Register
