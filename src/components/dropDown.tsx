// import './dropDown.css';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const categories = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics", "All categories"] 

function dropDown ()  {

 return ( 
    //   <div className="dropdown">


    //   <Button variant="contained" color='primary' className="dropbtn" >Categories</Button>
    //   <div className="dropdown-content">
    //       {categories.map((category) =><button key={category} >{category}</button>)}
    //   </div>


    // </div>

    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <>
        <Button variant="contained" {...bindTrigger(popupState)}>
        Categories
        </Button>

        <Menu {...bindMenu(popupState)}>
        {categories.map((category) =>
        <MenuItem key={category} onClick={popupState.close}>{category}</MenuItem>)}
        </Menu>
      </>
    )}
  </PopupState>

    );

}





export default dropDown;