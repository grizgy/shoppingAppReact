import {Box, Card, Typography, CardActions, Button, TextField, Stack, Input, FormLabel, FormControl} from "@mui/material" 
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
      
      
       
            // <FormControl onSubmit={onSubmit}>

            <form onSubmit={onSubmit}>



            <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh">


                <Card>

                <Typography>Register</Typography>

                    <Stack spacing={2} direction='column'alignItems={'center'}>

                        <Stack spacing={2} direction='column'>
                                {/* <FormLabel>Account email</FormLabel> */}
                                <TextField label="Account email"  required type={'email'} variant="standard" onChange={(e)=>setFormData({...formData, email: e.target.value})}></TextField>
                        </Stack> 

                        <Stack spacing={2} direction='column'>
                                {/* <FormLabel>Username</FormLabel> */}
                                <TextField label="Username" required type={'text'}  variant="standard" onChange={(e)=>setFormData({...formData, username: e.target.value})}></TextField >
                        </Stack>    

                        <Stack spacing={2} direction='column'>   
                                {/* <FormLabel>Password</FormLabel> */}
                                <TextField label="Password" required type={'password'}  variant="standard" onChange={(e)=>setFormData({...formData, password: e.target.value})}></TextField>
                        </Stack>  
                     
                          
                        <Stack spacing={2} direction='column'>   
                                {/* <FormLabel>First Name</FormLabel> */}
                                <TextField label="First Name" required type={'text'} variant="standard" onChange={(e)=>setFormData({...formData, firstname: e.target.value})}></TextField>
                        </Stack>                         

                        <Stack spacing={2} direction='column'>   
                                {/* <FormLabel>Last Name</FormLabel> */}
                                <TextField label="Last Name" required type={'text'} variant="standard" onChange={(e)=>setFormData({...formData, lastname: e.target.value})}></TextField>
                        </Stack>   

                        <Stack spacing={2} direction='column'>          
                                {/* <FormLabel>Phone number</FormLabel> */}
                                <TextField label="Phone number" required type={'text'}  variant="standard" onChange={(e)=>setFormData({...formData, phone: e.target.value})}></TextField>
                         </Stack> 


                    <CardActions>                
                                <Button type="submit" variant="contained">Register</Button>
                                 <div>You have an account?<Link to={`/login`} className="search-item"><Button variant="contained" color="success">Log in</Button></Link></div>
                    </CardActions>

                </Stack>
            </Card>

        </Box>
        </form>


    // {/* </FormControl> */}

    


        );
  
} 

export default Register;