import {Box, Card, Typography, CardActions, Button, TextField, Stack} from "@mui/material" 
import { Link} from "react-router-dom";


function Register ()  {

    return (
      
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh">
        <Card>
            <Typography>Register</Typography>

            <Stack spacing={2} direction='column'alignItems={'center'}>

                        <CardActions>
                        <Stack spacing={2} direction='column'>
                            {/* <FormLabel>Account email</FormLabel> */}
                            <TextField label="Username" required type={'text'} variant="standard"></TextField>
                        </Stack>
                        </CardActions>

                        <CardActions>
                        <Stack spacing={2} direction='column'>
                            {/* <FormLabel>Account email</FormLabel> */}
                            <TextField label="Account email" required type={'email'} variant="standard"></TextField>
                        </Stack>
                        </CardActions>

                        <CardActions>
                        <Stack spacing={2} direction='column'>
                            {/* <FormLabel>Password</FormLabel> */}
                            <TextField label="Password" required type={'password'} variant="standard"></TextField>
                        </Stack>    
                        </CardActions>

                        <CardActions>
                        <Stack spacing={2} direction='column'>
                            {/* <FormLabel>Password</FormLabel> */}
                            <TextField label="Confirm password" required type={'password'} variant="standard"></TextField>
                        </Stack>    
                        </CardActions>
        
                            <CardActions>
                            <Stack spacing={2} direction='column'>
                                {/* <FormLabel>Account email</FormLabel> */}
                                <TextField label="First Name" required type={'text'} variant="standard"></TextField>
                            </Stack>
                            </CardActions> 

                            <CardActions>
                            <Stack spacing={2} direction='column'>
                                {/* <FormLabel>Account email</FormLabel> */}
                                <TextField label="Last Name" required type={'text'} variant="standard"></TextField>
                            </Stack>
                            </CardActions>


                            <CardActions>
                            <Stack spacing={2} direction='column'>
                                {/* <FormLabel>Account email</FormLabel> */}
                                <TextField label="Phone number" required type={'text'} variant="standard"></TextField>
                            </Stack>
                            </CardActions>



                <CardActions>
                <Button variant='contained' size='large'>Register</Button>
                <div>Already have an account?<Link to={`/login`} className="search-item"><Button size='small'>Sign in</Button></Link></div>
                </CardActions>

              </Stack>
        </Card>
    </Box>

        );
  
} 

export default Register;