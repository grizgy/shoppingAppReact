import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function footer () {

    return (

        <div className='footer'>
        <div className='footer-left'>Kristian Hristov 2023</div>
        <div className='footer-right'>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <LinkedInIcon></LinkedInIcon>
        <GitHubIcon></GitHubIcon>
        </div>
        </div>
       
    );

}

export default footer;