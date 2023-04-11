// import './checkout.css';
import {Box, Card, Typography, FormControl, CardActions, Button, FormLabel, TextField, CardContent, Stack} from "@mui/material" 
import { Link } from 'react-router-dom';

function Checkout () {

    return (
        
<Stack spacing={2} direction='column'alignItems={'center'}>

    <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        maxWidth={'80vh'} >
            <Card>
        <FormControl className="grid-form">

    

    
        <Typography>Contact information</Typography>
        <CardActions>
        <Stack spacing={2} direction='column'>
        <div className="form-group-1"> 
        <div className="big">Contact information</div>
            <div className="inside">
                <TextField type="text" label="Email" required> </TextField>
            </div>
        </div>
        {/* <!-- <p>Shipping address</p> --> */}
        <div className="form-group-2">
        <div className="big">Shipping address</div>
        <Stack direction='column'>
        <div className="inside" >
            <TextField type="text" label="Name" required></TextField>
            <TextField type="text" label="Address" required></TextField>
            <TextField type="text" label="City"required></TextField>
            <select id="country" name="country" required>
                <option value="australia">Austria</option>
                <option value="canada">Germany</option>
                <option value="usa">Switzerland</option>
            </select>
            <TextField type="text" label="Postal code" required></TextField>
            <TextField type="text" label="Phone (optional)"></TextField> 
        </div>
        </Stack>
        </div>
        {/* <!-- <p>Card details</p> --> */}
        {/* <div className="form-group-3">
        <div className="big">Card details</div>
            <div className="inside">
                <label>Name on card</label>
                <input type="text" name="CName" required>
                <label>Card number </label>
                <input type="text" name="CNumber" required>
                <label>Expiration</label>
                <input type="text" name="Expiration" placeholder="MM/YYYY"  required>
                <label>CVC</label>
                <input type="text" name="CVC" required>
            </div>
        </div> */}
        {/* <div className="costs">
            <div className="costspos">
            <div className="subtotal">Subtotal:€{{total.toFixed(2)}}</div>
            <div className="shippingcosts">Shipping costs:€{{shippingCosts.toFixed(2)}}</div>
            <div className="totalcost big">Total:€ {{(total + shippingCosts).toFixed(2)}}</div>
            </div>
        </div> */}
        <div className="butt">
                    <div id="back"><Link to={'/cart'}>⟻Back to cart</Link></div>
                    <Link to={'/login'}><div id="pay"><button type="submit">Pay</button></div></Link>
        </div>

        </Stack>
        </CardActions>
        </FormControl>
        </Card>
    </Box>
</Stack>



    );

}

export default Checkout;