import {Box, Card, Typography, CardActions, Button, TextField, Stack} from "@mui/material" 
import { Link} from "react-router-dom";

function Login ()  {

   

    return (
      
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
                <TextField label="Account email" required type={'email'} variant="standard"></TextField>
            </Stack>
            </CardActions>
        

    
            <CardActions>
            <Stack direction='column'>
                {/* <FormLabel>Password</FormLabel> */}
                <TextField label="Password" required type={'password'} variant="standard"></TextField>
            </Stack>    
            </CardActions>

    
            <CardActions>
            <Button variant='contained' size='large'>Login</Button>
            <div>Don't have an account?<Link to={`/register`} className="search-item"><Button size='small'>Sign Up</Button></Link></div>
            </CardActions>
         
        </Stack>
    </Card>
</Box>
    

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