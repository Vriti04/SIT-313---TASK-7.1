import Input from "./input"
import Button from "./button"
import { useState } from "react"
import {Link} from 'react-router-dom'
import {signInWithGooglePopup,createuserdocfromAuth,userDocRef, signinAuthUserWithEmailAndPassword} from './firebase'

function Login() {
  
   const userlogGoogle = async() =>
   {
    const {user} =await signInWithGooglePopup()
    const userDocRef= await createuserdocfromAuth(user)
   }

  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)
   async function handleClick(event)
  {
  
    try{
    const response = await signinAuthUserWithEmailAndPassword(email,password)
    console.log(response)
    } 
    catch(error){
    console.log('error loging you in', error.message)
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="header">

        EMAIL:
      <Input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}

      />
      <br></br>

      PASSWORD:
      <Input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
      <br></br>
      <button onClick={handleClick}>
        Login in
      </button>
      <br></br>
<button onClick ={userlogGoogle}>
  Login with Google
  </button>      
      
      <br></br>
<br>

</br>
      <Link className ="sign" to= '/signup'>
        Don't have an account? Sign up
      </Link>

    </div>
)}
export default Login