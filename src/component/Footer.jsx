import { Link } from "react-router-dom"
import Logo from '../images/mainlogo.png'





const Footer = () => {
  return (
   <footer>
    <div className="container footer__container">
        <article>
            <Link to ="/" className="logo">
                <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>Vehicle Accident Prevention System ,Our Hardware + Software Project</p>

           
        </article>

        <article>
            <h4>Permalinks</h4>
            <Link to= "/about" className="permalinks">About</Link>
            
            <Link to = "/Trainers" className="permalinks">Members</Link>
            <Link to = "/gallery"  className="permalinks">Gallery</Link>
            <Link to = "/contact" className="permalinks">Contact</Link>
        </article>
        

        <article>
            <h4>Get In Touch</h4>
            
           
            <Link to = "/contact" className="GetTouch">Contact Us</Link>
        </article>
    </div>

    <div className="footer__copyright">
        <small>2024 Arnab Paul &copy; All Rights Reserved </small>
    </div>
   </footer>
  )
}

export default Footer