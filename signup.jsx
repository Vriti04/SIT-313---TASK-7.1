import Input from "./input"
import { useState } from "react"
import { Link } from "react-router-dom"
import {createAuthUserWithEmailAndPassword, createuserdocfromAuth} from './firebase'
function Signup() {
  
  const [contact, setcontact] =useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const {displayName,email,password,confirmPassword} =contact
  console.log(contact)
  
  async function handleClick(event)
  {
   if(password!==confirmPassword)
   {  
    alert('password do not match')
    return;
   }
    try{
    const {user} = await createAuthUserWithEmailAndPassword(email,password)
    await createuserdocfromAuth(user,{displayName})
    console.log(user)
    } 
    catch(error){
    console.log('error in creation', error.message)
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
    <div className="header" >
        NAME:
      <Input
        name = 'displayName'
        type='text'
        placeholder='name'
        onChange ={handlepass}
      />
      <br></br>
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

      PASSWORD:
      <Input
        name= 'confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange ={handlepass}
        />
      <br></br>
      <button className="button" onClick={handleClick}>
      Signup
      </button>
             <br></br>
             <br></br>
      <Link to ='/login'>
      Already have an account? Log in
      </Link>
    </div>
)}
export default Signup