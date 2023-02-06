import './header.css';
import DropDown from './dropDown';
import { Link} from "react-router-dom";

function header () {
    return(
        
        <header className="main-header">
        <div className="header-left">
        <Link to={'/'}>
        <img className="logo" src="https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg" alt="Visit main search page" ></img>
        </Link>
        </div>
        <div className="header-right">
        <DropDown/> 
        <Link to={'/cart'} className="header-links">Cart(0)</Link>
        </div>
        </header>

    );
}

export default header;