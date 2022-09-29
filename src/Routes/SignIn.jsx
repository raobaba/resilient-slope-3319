import React from 'react'
import styles from '../Components/Navbar.module.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react'
const SignIn = () => {
  return (
    <>
    <div>
      <div className={styles.regi_1}>
        <h1>Sign In</h1>
        <p>Access your online courses and track your progress</p>
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
                <Input h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' type='email' placeholder='Enter Your Email' />
                <FormHelperText color='grey' ml={-199}>We'll never share your email.</FormHelperText>
                <br />
                <FormLabel color='grey'>Choose a Password </FormLabel>
                <Input h={30} w={400} borderTop='none' borderLeft='none' borderRight='none' type='password' placeholder='Enter Your Password' />
              </FormControl>
              </div>

          </div>
          
        </div>
        <div>
          <p><Link style={{textDecoration:"none",fontSize:"22px",color:"1965CE"}} to='/signin'>Forgoton Password</Link> </p>
          <button>Sign In</button>
        </div>
        <hr style={{width:"50%"}} />
        <p style={{marginLeft:"-460px"}}>Need an account ?<Link to='/register'>Sign up here</Link> </p>
      </div>
    </div>

     <Footer />
     </>
  )
}

export default SignIn
