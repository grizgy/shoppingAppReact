import './header.css';
import DropDown from './dropDown';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Header  ()  {

    const totalCount = useSelector((state : any )=> state.counter);

    return(
        
        <header className="main-header">
        <div className="header-left">
        < Link to="/">
        <img className="logo" src="https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg" alt="Visit main search page" ></img>
        </Link>
        </div>
        <div className="header-right">
        <DropDown/>

        <Link to={'/cart'} className="header-links">Cart <Badge color="secondary" badgeContent={totalCount.count}>
          <ShoppingCartIcon sx={{ fontSize: "2.2rem" }}/>
        </Badge></Link>

        </div>
        </header>

    );
}

export default Header; 