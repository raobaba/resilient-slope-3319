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
  const [user, setUser] = useState(initState);
  function submitHandler(e) {
    e.preventDefault();
    console.log(user);
   if(user.email===""){
    alert("Please Enter Your Email")
   }
   else if(user.password===""){
    alert("Please Set Your Password");
   }
   else if(user.password.length<6){
    alert("Password should be 6 digit!");
   }else{
    alert("You have successfully Register!");
   }
  }
  function emailChangeHandler(event) {
    setUser((user) => ({
      ...user,
      email: event.target.value
    }));
  }
  function passwordChangeHandler(event) {
    setUser((user) => ({
      ...user,
      password: event.target.value
    }));
  }
  return (
    <>
    <div>
      <div className={styles.regi_1}>
        <h1>Create Your Account</h1>
        <p>Sign up to access Google Digital Garage free online courses</p>
      </div> 
      <form>
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
                <Input name="email" value={user.email} onChange={emailChangeHandler} h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' placeholder='Enter Your Email' />
                <FormHelperText color='grey' ml={-199}>We'll never share your email.</FormHelperText>
                <br />
                <FormLabel color='grey'>Choose a Password </FormLabel>
                <Input type="password" name="password" value={user.password} onChange={passwordChangeHandler} h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' placeholder='Enter Your Password' />
              </FormControl>
              </div>
              <p>Use 6 or more characters with a mix of letters, numbers & symbols</p>

          </div>
          
        </div>
        <div>
          <p>Already have an account <Link to='/signin'>Sign in</Link> </p>
          <Button onClick={submitHandler} type='submit'>Continue</Button>
        </div>
      </div>
      </form>
    </div>

     <Footer />
     </>
  )
}

export default Register
