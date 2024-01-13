import {Box, Card, Typography, CardActions, Button, TextField, Stack, Input, Paper, FormControl } from "@mui/material" 
import { Link} from "react-router-dom";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";


function Login ()  {

    const signIn = useSignIn();
    const [formData, setFormData] = useState({email: '', password: ''})
    const [errorMessage, setErrorMessage] =useState('')

    const onSubmit = async (e : any) => {
        e.preventDefault()
    
        try {
        const response = await axios.post(
          'http://localhost:8080/auth', 
          formData)
    
    
          signIn({
                token: response.data.token,
                expiresIn: 60,
                tokenType: "Bearer",
                authState: {email:formData.email}
            })
    
            console.log(formData)
            window.location.href = 'http://localhost:3000/products'
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
      



        // <Typography>SIGN IN</Typography>

<form onSubmit={onSubmit}>

<Box display="flex"
justifyContent="center"
alignItems="center"
minHeight="80vh">

      <Card>

        <Typography>SIGN IN</Typography>

        <Stack direction='column'alignItems={'center'}>

            <CardActions>
              <Stack direction='column'>
                  {/* <FormLabel>Account email</FormLabel> */}
                  <TextField label="Account email" required type={'email'} variant="standard" onChange={(e)=>setFormData({...formData, email: e.target.value})}></TextField >
                  </Stack>
            </CardActions>
      
            <CardActions>
                  <Stack direction='column'>
                  {/* <FormLabel>Password</FormLabel> */}
                      <TextField label="Password" required type={'password'} variant="standard" onChange={(e)=>setFormData({...formData, password: e.target.value})}></TextField >
                  </Stack>
            </CardActions>
      
            <CardActions>
              <Button type="submit" variant="contained">Login</Button>
              <div>Don't have an account?<Link to={`/register`} className="search-item"><Button variant="contained" color="success">Sign Up</Button></Link></div>
            </CardActions>


            </Stack>
    </Card>
</Box>

</form>
  

    

                /* <form [formGroup]="loginForm" fxLayoutAlign="stretch" fxLayout="column" class="login-form">
              <mat-form-field>
                <mat-label>Account email</mat-label>
                <input type="email" id="email" name="email" formControlName="email"
                matInput required pattern = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" >
              </mat-form-field>
            
              <mat-form-field>
                  <mat-label>Password</mat-label>
                  <input  type="password" id="password" name="password" formControlName="password" matInput required >
              </mat-form-field>
                  <button [disabled]="!loginForm.valid" mat-button-raised type="submit" (click)="loginUser()">Login</button>
                  <span>Don't have an account? <a routerLink="/register">Sign Up</a></span>
              </form> */


        );
  
  } 
  
  
  
  
  
  export default Login;