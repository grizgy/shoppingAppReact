import {Box, Card, Typography, CardActions, Button, TextField, Stack} from "@mui/material" 
import { Link} from "react-router-dom";
import { useState } from "react";
import axios, { AxiosError } from "axios";


function Register ()  {

    const [formData, setFormData] = useState({email: '', username : '', password: '',  firstname: '', lastname: '', phone: ''})
    const [errorMessage, setErrorMessage] =useState('')

    const onSubmit = async (e : any) => {
        e.preventDefault()
    
        try {
        const response = await axios.post(
          'http://localhost:8080/register', 
          formData)
    
    
    
        console.log(formData)
        } catch (error) {
    
          if(error && error instanceof AxiosError) {
            setErrorMessage(error.response?.data.message)
          } else if (error && error instanceof Error) {
            setErrorMessage(error.message)
          }
    
          console.log("Error: ", error )
    
        }
    
    }

    return (
      
      
       
            <form onSubmit={onSubmit}>

                                {/* <FormLabel>Account email</FormLabel> */}
                                <input   required type={'email'} onChange={(e)=>setFormData({...formData, email: e.target.value})}></input>
                     
                                {/* <FormLabel>Username</FormLabel> */}
                                <input  required type={'text'}  onChange={(e)=>setFormData({...formData, username: e.target.value})}></input >
                           
                                {/* <FormLabel>Password</FormLabel> */}
                                <input  required type={'password'}  onChange={(e)=>setFormData({...formData, password: e.target.value})}></input>
                             
                    
                            {/* <Stack spacing={2} direction='column'> */}
                                {/* <FormLabel>Confirm password</FormLabel> */}
                                {/* <TextField label="Confirm password" required type={'password'} variant="standard" onChange={(e)=>setFormData({...formData, confirmedPassword: e.target.value})}></TextField>
                            </Stack>     */}
                     
                          
                                {/* <FormLabel>First Name</FormLabel> */}
                                <input required type={'text'} onChange={(e)=>setFormData({...formData, firstname: e.target.value})}></input>
                         
                                {/* <FormLabel>Last Name</FormLabel> */}
                                <input required type={'text'}  onChange={(e)=>setFormData({...formData, lastname: e.target.value})}></input>
                           
                                {/* <FormLabel>Phone number</FormLabel> */}
                                <input required type={'text'}  onChange={(e)=>setFormData({...formData, phone: e.target.value})}></input>
                         

                                <button >Register</button>
            <div>You have an account?<Link to={`/login`} className="search-item"><button>Log Up</button></Link></div>


        


                </form>

    


        );
  
} 

export default Register;